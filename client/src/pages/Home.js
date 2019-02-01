import React from 'react';
import { connect } from 'react-redux';
import constants from '../utils/constants';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Footer from '../components/footer'


const Home = (props) => {
    return (
        <div>
            <Navbar color="light" light expand="md" id="navbar">
                <NavbarBrand href="/" id="navbarBrand">MYFOODAPP.</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem active>
                        {/*<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
                        <NavLink
                            style={{ cursor: "pointer" }}
                        >You are logged in.
                        </NavLink>
                    </NavItem>
                    <NavItem active>
                        <NavLink href="/components/">Log out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

            <Container fluid style={{ textAlign: "center", margin: "50px 0" }}>
                <Row>
                    <Col xs="4">
                        <img src="https://fillmurray.com/450/450" alt="placeholder" />
                        <h3>My fridge</h3>
                    </Col>
                    <Col xs="4">
                        <img src="https://fillmurray.com/450/450" alt="placeholder" />
                        <h3>My pantry</h3>
                    </Col>
                    <Col xs="4">
                        <img src="https://fillmurray.com/450/450" alt="placeholder" />
                        <h3>My counter</h3>
                    </Col>
                </Row>
            </Container>

            <Footer />

        </div>
    )
}

function mapStateToProps(state) {
    return {
        inputText: state.inputText
    }
}

function mapDispatchToProps(dispatch) {
    return {

        inputChange: (evt) => {
            const action = { type: constants.CHANGE_INPUT_TEXT, text: evt.target.value }
            dispatch(action)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);