import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../index.css"

const Footer = () => (
    <footer>
        <Container style={{ textAlign: "center" }}>
            <Row>
                <Col>
                    <ul>
                        <li>Contact</li>
                        <li>·</li>
                        <li>Blog</li>
                        <li>·</li>
                        <li>Docs</li>
                        <li>·</li>
                        <li>Terms and Privacy</li>
                    </ul>
                    <p>Copyright © 2018. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;