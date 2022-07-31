import React from "react";
import Slider from "./components/Slider";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import cardImg from "./card.jpg"
import Jumbotron from "./components/Jumbotron";

export const Home = () => (
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={cardImg}/>
                        <Card.Body>
                            <Card.Title>Try it now!</Card.Title>
                            <Card.Text>Gentleman found prudent introduced built moreover brought only shameless match
                                dissimilar me merry pasture greatest comparison music.</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={cardImg}/>
                        <Card.Body>
                            <Card.Title>Try it now!</Card.Title>
                            <Card.Text>Gentleman found prudent introduced built moreover brought only shameless match
                                dissimilar me merry pasture greatest comparison music.</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={cardImg}/>
                        <Card.Body>
                            <Card.Title>Try it now!</Card.Title>
                            <Card.Text>Gentleman found prudent introduced built moreover brought only shameless match
                                dissimilar me merry pasture greatest comparison music.</Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px', marginTop: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={cardImg} height={400}/>
                </Col>
                <Col md={5}>
                    <h2>Last Chance!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa error expedita explicabo illum,
                        magnam recusandae suscipit? Aliquam autem cumque cupiditate ea eveniet minima molestias officiis
                        qui quo, sit tempora voluptatem.</p>
                </Col>
            </Row>
        </Container>
    </>
)
