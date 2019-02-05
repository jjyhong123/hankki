import React, { Component } from 'react'
import io from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import "../index.css"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import constants from '../utils/constants';
import Footer from '../components/Footer'

import AuthButton from '../components/AuthButton' //

const API_URL = 'http://127.0.0.1:3001'
const socket = io(API_URL)
//const providers = ['google', 'facebook'] //

export default class Auth extends Component {

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {

    return (
      <div>
        <div className="banner" style={{ height: /*"723px"*/"724px", textAlign: "center", position: "relative" }}>

          <Navbar color="faded" dark expand="md" id="navbar">
            <NavbarBrand href="/" id="navbarBrand">hankki.</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem active>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem active>
                {/*<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                <NavLink>Log in
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <div style={{ color: "white", fontSize: "65px", height: "100px", width: "100%", position: "absolute", margin: "auto", top: 0, right: 0, bottom: 0, left: 0 }}>
            Make a meal out of anything.
              <div id="loginButton" onClick={this.toggle}>Get started</div>
          </div>

          {/*Authentication modal*/}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Sign in</ModalHeader>
            <ModalBody>
              <AuthButton provider="twitter" icon={faTwitter} socket={socket} />
              <AuthButton provider="google" icon={faGoogle} socket={socket} />
              {/*<AuthButton provider="google" icon={faGoogle} socket={socket} />*/}
              
            </ModalBody>
          </Modal>

        </div>

        <Footer />

      </div>

    )
  }
}