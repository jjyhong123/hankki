import React from 'react';
import { connect } from 'react-redux';
import constants from '../utils/constants';
import { Card, CardImg, CardDeck, Row, Col, Container, Navbar, NavbarBrand, NavItem, Nav, NavLink } from 'reactstrap';
import Footer from '../components/Footer'
import "../index.css"

import fridge from "../utils/images/fridge.jpg";
import fridge2 from "../utils/images/fridge2.jpeg";
import pantry2 from "../utils/images/pantry2.jpg";
import counter from "../utils/images/counter.jpg";
import counter2 from "../utils/images/counter2.jpg";

const Home = (props) => {
    const { name, photo } = props.user
    console.log(props.user)

    return (
        <Container fluid style={{ backgroundColor: "whitesmoke" }} id="homeDiv">
            <div id="bread-banner">
                <Navbar color="faded" dark expand="md" id="navbar">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <img src={photo} alt="user photo" style={{height: "40px", width: "40px"}}/>
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
            <div style={{ textAlign: "center", margin: "30px 0" }}><h3>Select one</h3></div>

            <div>
                <CardDeck style={{ backgroundColor: "whitesmoke", marginBottom: "100px" }}>
                    <Card className="img_wrap">
                        <CardImg src={fridge} alt="Inside of fridge" />
                        <div className="img_description"><h4>My fridge</h4></div>
                    </Card>
                    <Card className="img_wrap">
                        <CardImg src={pantry2} alt="Pantry" />
                        <div className="img_description"><h4>My pantry</h4></div>
                    </Card>
                    <Card className="img_wrap">
                        <CardImg src={counter2} alt="Counter" />
                        <div className="img_description"><h4>My counter</h4></div>
                    </Card>
                </CardDeck>
            </div>

            <Footer />

        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);