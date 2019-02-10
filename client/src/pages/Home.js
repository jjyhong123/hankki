import React from 'react';
import { Card, CardImg, CardDeck, Row, Col, Container } from 'reactstrap';
import Footer from '../components/Footer'
import CustomNavbar from '../components/CustomNavbar'
import "../index.css"

import fridge from "../utils/images/fridge.jpg";
import fridge2 from "../utils/images/fridge2.jpeg";
import pantry2 from "../utils/images/pantry2.jpg";
import counter from "../utils/images/counter.jpg";
import counter2 from "../utils/images/counter2.jpg";

const Home = () => {
    return (
        <Container fluid style={{ backgroundColor: "whitesmoke" }} id="homeDiv">
            <CustomNavbar />
            <div style={{ textAlign: "center", margin: "30px 0" }}><h3>Select one</h3></div>

            <div>
                <CardDeck style={{ backgroundColor: "whitesmoke", marginBottom: "100px" }}>
                    <Card className="img_wrap">
                        <CardImg src={fridge} alt="Inside of fridge" />
                        <a href="/fridge"><div className="img_description"><h4>My fridge</h4></div></a>
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

export default Home;

