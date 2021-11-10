import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

const Consumption = () =>{
    return(
        <>
            <div className="Consumption">
                <div id="consumptionHeader">
                    <h1>RESPONSIBLE CONSUMPTION AND BENEFITS OF LOCAL CONSUMPTION</h1>
                    <p>
                        Responsible consumption helps reward fair and responsible models of production
                    </p>
                </div>
                <div>
                    <img src="https://www.activesustainability.com/media/655423/beneficios-consumo-local.jpg" alt="image of a bakery" />
                    <p>
                    As consumers, we have much more power than we realize. So much, 
                    it could be said that every day we vote by what we buy, as if 
                    purchasing was a political choice. In what way is this true? 
                    Specialized consumer affairs journalist Brenda Chávez, author 
                    of the book Your Consumption Can Change the World, explains that: 
                    <strong>“Through our consumption, we are able to reward fair and responsible 
                    models of production.</strong> Voting is something we do every few years but 
                    buying is something we do every day. We give our money to a string of
                    companies and at times this money benefits productive systems which, 
                    if we knew what kind of norms they operate by, we would probably think
                    twice about it.”
                    </p>
                    <div id="quote">
                        <img src="https://www.activesustainability.com/assets/images/quotes.png" alt="quotes" />
                        <p>
                            As consumers, we have much more power than we realize. Find out how, 
                            by being a responsible consumer, you can support sustainable development
                        </p>
                    </div>
                    <h2>What is a responsible consumer?</h2>
                    <p>
                    Boiling it down, the responsible consumer could be defined as someone who is conscious
                    of their consumption habits and who chooses to have, even demands, 
                    a more positive impact on society and the environment from the producers of 
                    goods and services. In this way, according to the magazine Ethical Consumer, 
                    the profile of the responsible consumer is determined by five factors. He or she helps by:
                    </p>
                    <div>
                        <ul class="con-list">
                            <li>
                                <p><FontAwesomeIcon icon={faEnvira} id="envira"/>   Reducing consumption</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvira} id="envira"/>   Being more active</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvira} id="envira"/>   Consuming local products and contracting local services, as well as secondhand products</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvira} id="envira"/>   Keeping and investing their money in an ethical bank</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvira} id="envira"/>   Reusing, repairing and recycling.</p>
                            </li>  
                        </ul>
                    </div>
                    <p>
                    One of the factors that notably influences this kind of <strong>responsible consumption</strong> is proximity, 
                    also called <strong>local consumption</strong>. It is often heard that local consumption has <strong>environmental, 
                    social and economic benefits</strong>, but what are those benefits? By buying from local producers 
                    who respect the environment and labor conditions, why are we supporting <strong>sustainable 
                    development?</strong>
                    </p>
                    <div>
                        <Container>
                            <Row>
                                <Col sm={5}>
                                    <h3>The enviromental benefits of local consumption</h3>
                                    <p>
                                    The main environmental benefits of local consumption are 
                                    <strong>energy saving</strong> and the <strong>reduction of greenhouse gas emissions</strong>, 
                                    given that the means of transporting the products from far-off 
                                    places generate more emissions. Likewise, it cuts back on 
                                    packaging because a product that does not travel so far does 
                                    not needs so much protection. Also, as concerns food, the 
                                    consumption of seasonal products favors the local economy 
                                    and reduces imports of products and their corresponding transportation.
                                    </p>
                                </Col>
                                <Col sm={7}>
                                    <img src="https://www.activesustainability.com/media/611965/beneficios-consumo-local-2.jpg" id="con-img" alt="large truck full of fruit"/>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <h1> Socioeconomic benefits of local consumption</h1>
                    <p>
                    Product traceability is much simpler when bought locally than when that product comes from another part of the world. 
                    As such, it is much more likely that workers’ rights and workplace standards have been respected in its creation, 
                    cultivation, production, treatment, transformation, storage, sending, etc.
                    </p>
                    <p>
                    <strong>Consuming local products</strong> helps the economy in the area: a euro spent on local products generates double 
                    for the local economy. Also, if local producers gain from their work, they will continue to generate 
                    wealth and jobs in the community.
                    </p>
                    <p>
                    The market also benefits, since it creates a gap for smaller competitors, 
                    which results in a better offer and eventual lowering of prices and greater 
                    accessibility for users and consumers.
                    </p>
                    <p>
                    Although the responsibility of achieving a more sustainable world does 
                    not fall only on the shoulders of consumers, their role and possibilities 
                    for influencing fair and responsible productive models makes a big difference 
                    in bringing about global <strong>sustainable development</strong>.
                    </p>
               </div>
            </div>
        </>
    )
}

export default Consumption;