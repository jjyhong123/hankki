import React, { Component } from 'react'
import io from 'socket.io-client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import "../index.css"
import { Modal, ModalHeader, ModalBody, Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import constants from '../utils/constants';
import Footer from '../components/Footer'
import AuthButton from '../components/AuthButton'
const API_URL = 'http://127.0.0.1:3001'
const socket = io(API_URL)

const Auth = (props) => {

    return (
      <div>
        <div className="banner" style={{ height: /*"723px"*/"724px", textAlign: "center", position: "relative" }}>

          <Navbar color="faded" dark expand="md" id="navbar">
            <NavbarBrand href="/" id="navbarBrand">hankki.</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem active>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <div style={{ color: "white", fontSize: "65px", height: "100px", width: "100%", position: "absolute", margin: "auto", top: 0, right: 0, bottom: 0, left: 0 }}>
            Make a meal out of anything.
              <div id="loginButton" onClick={props.toggleModal}>Get started</div>
          </div>

          {/*Authentication modal*/}
          <Modal isOpen={props.modal} toggle={props.toggleModal}>
            <ModalHeader toggle={props.toggleModal}>Sign in</ModalHeader>
            <ModalBody>
              <AuthButton provider="twitter" icon={faTwitter} socket={socket} />
              <AuthButton provider="google" icon={faGoogle} socket={socket} />
            </ModalBody>
          </Modal>
        </div>
        <Footer />
      </div>
    )
}

function mapStateToProps(state) {
  return {
    modal: state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleModal: (evt) => {
      const action = { type: constants.TOGGLE_MODAL }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);