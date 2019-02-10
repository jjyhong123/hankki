import React, { Component } from 'react'
import { connect } from 'react-redux'
import constants from "../utils/constants"
import { Card, CardImg, CardDeck, Row, Col, Container, Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';
import Footer from '../components/Footer'
import CustomNavbar from '../components/CustomNavbar'
import "../index.css"

const Fridge = (props) => {
    return (
    <div>
        <CustomNavbar />
        <h1>My fridge</h1>
        <p>Here are the items in my fridge:</p>
        <ul>
            <li>Some roast beef</li>
            <li>Some chicken</li>
            <li>Some pizza</li>
        </ul>
    </div>
    )
}

/*
class Fridge extends Component {
    componentDidMount() {

    }

    render() {
        return (<div></div>)
    }
}
*/

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Fridge)