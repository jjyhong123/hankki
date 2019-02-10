import React from 'react'
import { connect } from 'react-redux'
import constants from '../utils/constants'
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap'
import "../index.css"

const CustomNavbar = (props) => {
    const { name, photo } = props.user

    return (
        <div id="bread-banner">
            <Navbar color="faded" dark expand="md" id="navbar">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <img src={photo} alt="user photo" style={{ height: "40px", width: "40px" }} />
                    </NavItem>
                    <NavItem active>
                        <NavLink>Welcome, {name}!</NavLink>
                    </NavItem>
                    <NavItem active>
                        <NavLink onClick={props.signOut} style={{ cursor: "pointer" }}>Sign out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => {
            sessionStorage.setItem("name", "")
            sessionStorage.setItem("photo", "")
            const action = { type: constants.SIGN_OUT }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);


