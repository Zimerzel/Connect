import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { Col, Row, Container } from "react-bootstrap"


function Community() {
    return(
        <>
        <div className="community">
            <h1> Our Community </h1>
            <br></br>
            <h3>Staff</h3>
            <br></br>
            <Container id="staff" >
                <div>
                    <Row>
                        <Col xs={5}>
                            {/* "man who cant dance" */}
                            <img src ="https://www.celebritykind.com/wp-content/uploads/2018/04/IMG_1968-1024x1024.jpg" alt="Paul Walker ROWW" id="staff-Paul"/>
                        </Col>
                        <Col xs={7}>
                            <h2>Paul Walker</h2>
                            <LoremIpsum p={1} />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col xs={5}>
                            {/* "man who cant dance" */}
                            <img src ="https://educateinspirechange.org/wp-content/uploads/2018/12/images-7-2.jpeg" alt="phil collins" id="staff-Leo"/>
                        </Col>
                        <Col xs={7}>
                            <h2> Leonardo DiCaprio</h2>
                            <LoremIpsum p={1} />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col xs={5}>
                            {/* "man who cant dance" */}
                            <img src ="https://bckonline.com/wp-content/uploads/2018/10/Smith.jpg" alt="Will and Jaden Smith" id="staff-Smiths"/>
                        </Col>
                        <Col xs={7}>
                            <h2>Will Smith, Jaden Smith</h2>
                            <LoremIpsum p={1} />
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="community-contact">
                <h2>Contact</h2>
                <br></br>
                <h3>Best way to reach out</h3>
                    <LoremIpsum p={1} />
                <br></br>
                <h3>How can I help Connect?</h3>
                    <LoremIpsum p={1} />
                <br></br>
                <h3>Looking for a job?</h3>
                    <LoremIpsum p={1} />
                <br></br>
            </div>
            <h2>Volunteer</h2>
            <br></br>
            <p><LoremIpsum p={1} /></p>
            <br></br>
        </div>
        </>
    )
}

export default Community;