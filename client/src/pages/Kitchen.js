import React from 'react';
import { connect } from 'react-redux';
import constants from '../utils/constants';
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Kitchen = (props) => {
    return (
        <Container style={{textAlign: "center"}}>
            <Row><Col>Select one:</Col></Row>
            <Row>
                <Col>
                <div className="test-image"></div>
                My fridge
                </Col>
                <Col>
                <div className="test-image"></div>
                My pantry
                </Col>
                <Col>
                <div className="test-image"></div>
                My counter
                </Col>
            </Row>

            {/*<input value={props.inputText} onChange={props.inputChange} ></input>
            <p>{props.inputText}</p>*/}

        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);