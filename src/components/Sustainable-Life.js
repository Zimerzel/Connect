import React from "react";
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Life = () =>{
    return(
        <>
            <div className="Life">
                <Container>
                    <Row>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/sustainable-life/video-games" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815589/videojuegos-ecologismo-sosteniblidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">VIDEO GAMES THAT ENCOURAGE MORE SUSTAINABLE BEHAVIOUR</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/sustainable-life/consumption" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/655423/beneficios-consumo-local.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">RESPONSIBLE CONSUMPTION AND BENEFITS OF LOCAL CONSUMPTION</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="life-cards">
                            <Link to="/tiny" id="life-link">
                                <Button id="life-btn">
                                <Card.Img variant="top" src="https://www.activesustainability.com/media/815473/yomequedoencasa-sostenibilidad.jpg" id="life-img"/>
                                <Card.Body>
                                    <Card.Title id="life-title">#STAYHOME SUSTAINABILITY</Card.Title>
                                </Card.Body>
                                </Button>
                            </Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Life;