import React, { Component } from 'react'
import io from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import "../index.css"

import { connect } from 'react-redux';
import constants from '../utils/constants';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Footer from '../components/footer'

const API_URL = 'http://127.0.0.1:3001'
const socket = io(API_URL)

export default class Auth extends Component {

  constructor() {
    super()
    this.state = {
      user: {},
      disabled: ''
    }
    this.popup = null
  }

  componentDidMount() {
    socket.on('user', user => {
      this.popup.close()
      this.setState({ user })
    })
  }

  // Routinely checks the popup to re-enable the login button 
  // if the user closes the popup without authenticating.
  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check)
        this.setState({ disabled: '' })
      }
    }, 1000)
  }

  // Launches the popup on the server and passes along the socket id so it 
  // can be used to send back user data to the appropriate socket on 
  // the connected client.
  openPopup() {
    const width = 600, height = 600
    const left = (window.innerWidth / 2) - (width / 2)
    const top = (window.innerHeight / 2) - (height / 2)

    const url = `${API_URL}/twitter?socketId=${socket.id}`

    return window.open(url, '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
  }

  // Kicks off the processes of opening the popup on the server and listening 
  // to the popup. It also disables the login button so the user can not 
  // attempt to login to the provider twice.
  startAuth() {
    if (!this.state.disabled) {
      this.popup = this.openPopup()
      this.checkPopup()
      this.setState({ disabled: 'disabled' })
    }
  }

  closeCard() {
    this.setState({ user: {} })
  }

  render() {
    const { name, photo } = this.state.user
    const { disabled } = this.state

    return (
      <div>
        <div className="banner" style={{ height: /*"723px"*/"650px", textAlign: "center", position: "relative" }}>

          <Navbar color="faded" dark expand="md" id="navbar">
            <NavbarBrand href="/" id="navbarBrand">MYFOODAPP.</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem active>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem active>
                {/*<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                <NavLink
                  onClick={this.startAuth.bind(this)}
                  className={`twitter ${disabled}`}
                  style={{cursor: "pointer"}}
                >Log in with &nbsp;
                <FontAwesomeIcon
                    icon={faTwitter}
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          {name ? <div className={'card'}>
            <img src={photo} alt={name} />
            <FontAwesomeIcon
              icon={faTimesCircle}
              className={'close'}
              onClick={this.closeCard.bind(this)}
            />
            <h4>{`@${name}`}</h4>
          </div> : <div style={{ color: "white", fontSize: "65px", height: "100px", width: "100%", position: "absolute", margin: "auto", top: 0, right: 0, bottom: 0, left: 0 }}>
              Make anything from anything.
              <div className="button">Get started</div>
        </div>}

          {/*<input value={props.inputText} onChange={props.inputChange} ></input>
      <p>{props.inputText}</p>*/}
        </div>

        <Footer/>

      </div>

    )
  }
}