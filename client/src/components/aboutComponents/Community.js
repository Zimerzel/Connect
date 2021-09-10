import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { Col, Row, Container } from "react-bootstrap"


function Community() {
    return(
        <>
            <h2>Our Community</h2>
            <br></br>
            <h3>Volunteers</h3>
            <br></br>
            <p><LoremIpsum p={1} /></p>
            <br></br>
            <h3>Staff</h3>
            <br></br>
            <Container id="staff" >
                <Row>
                    <Col xs={1}>
                        {/* "man who cant dance" */}
                        <img src ="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-229980-r1256_fob_collins_b-c6e91f05-4c99-4561-9615-e2ce4a3625ee.jpg" alt="phil collins"/>
                    </Col>
                    <Col xs={2}>
                        <LoremIpsum p={1} />
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default Community;