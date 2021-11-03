import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import TinyHouse from '../assets/images/tiny-house.jpg'

const Tiny = () => {
    return(
        <>
            <div class="tiny-article">
            <Container>
                <Row>
                <div>
                    <h1> What is a Tiny House? </h1>
                        <p>
                            While there is no official definition of a tiny house, 
                            it is generally thought of as a small house, typically 
                            sized under 600 square feet. While they can be built on 
                            foundations, most tiny homes are built on trailers. 
                            This style of tiny house is often referred to as a THOW 
                            (tiny house on wheels).
                        </p>
                </div>
                </Row>
             
                    <Row>
                        <Col sm={5}>
                        <p>
                            There are several advantages to building a tiny 
                            house on a trailer. The two most favorable being, 
                            mobility and getting around local rules that dictate 
                            minimum structure size. Since a house built on a trailer
                            is not on a permanent foundation, it normally is not
                            governed by local building codes. Many municipalities 
                            dictate a minimum home size (square footage), 
                            which makes building a tiny house on a foundation 
                            not legally possible
                            </p>
                            <p>

                            There are however disadvantages to building a house on a
                            trailer. The main one being that it is confined to strict 
                            dimensions, since it will be driven down the road. 
                            The maximum dimensions allowed, without obtaining a special
                            permit, are 8 feet 6 inches wide, 13 feet 6 inches tall,
                            and 40 feet long. While this is the maximum, it is rare 
                            to see tiny houses longer than 32 feet, since beyond that 
                            length they become much more difficult to transport. For 
                            more information about transporting a tiny house be sure 
                            to read our 
                            </p>
                        </Col>
                        <Col sm={7}>
                            <div>
                                <img src={TinyHouse} alt="Tiny House Movement" class="img-responsive" />
                                <p class="caption-text">Tiny Home - Melbourne, AUS</p>
                            </div>
                        </Col>
                    </Row>
                
                    <Row>
                    <Col>
                        <div id="why-tiny">
                            <h2> Why People are Going Tiny </h2>
                            <p>
                            Over the years we’ve talked to tens of thousands of 
                            people who are looking to transition to the tiny life. 
                            And while their individual circumstances may vary considerably, 
                            their motivation for wanting change normally falls into three 
                            different groups.
                            </p>

                            <h3> Financial Benifits </h3>
                            <p>
                            The financial benefits of a tiny house are considerable. 
                            The most obvious savings are with the initial cost of the
                            home. A tiny house can be built for less than the cost of 
                            most cars. And because they are built to the same quality of
                            conventional homes, they can be expected to have a similar 
                            lifespan. Despite their lower cost, a properly built tiny 
                            house can provide housing for decades.
                            </p>
                            <p>
                            Once a home is built, the savings don’t stop. Because of their
                            smaller size, most of the utilities and all the maintenance costs
                            are less as well. While there is no savings to some bills like 
                            cable TV or garbage pickup, there are considerable saving to others, 
                            like electrical and gas. For example, my mom’s electrical bill for 
                            her tiny house in Florida was only $25 a month.
                            </p>
                            <p>
                            Additional savings are had with reduced property taxes or rent. 
                            Since tiny houses are not permanent, they are not considered an 
                            improvement to land, and thus don’t add to the value of the land 
                            or the expense of the property taxes. If the land is rented and 
                            not owned, it is also considerably cheaper to rent a plot of land 
                            versus a house or apartment.
                            </p>
                            <p>
                            Finally, there are also financial benefits from the reduced consumption 
                            that results from living in a tiny house. Having less space results in less 
                            shopping and buying. There simply isn’t the room for frivolous purchases, 
                            and so a shift occurs where shopping loses its appeal. This actually has
                            many benefits beyond economical.
                            </p>
                            <h3> Simplification </h3>
                                <p>
                                There is no need to move into a tiny house if simplifying your life is your goal. 
                                There are techniques that can be used to simplify now. There is no need to wait. 
                                While this is true, a tiny house will force you to lead a simpler life. 
                                </p>
                                <p>
                                Living tiny results in owning less. With that comes less thinking about your stuff, 
                                less time upgrading your stuff, less time maintaining your stuff, you get the picture. 
                                This process is so common that we’ve stopped noticing it and just consider it part of life.
                                It is an invisible weight on our shoulders. Only after it is removed do we recognize that it 
                                even existed. When I talk to people that have moved into tiny homes, I am repeatedly told 
                                how surprised they are that something they didn’t even know existed was having such a big impact on them.
                                </p>
                                <p>
                                Financial reasons are what brings most people to the tiny house movement, but the simpler life is what keeps them in it.
                                </p>

                                <h3> Enviromental Benifits </h3>
                                <p>
                                Using fewer utilities not only saves money but it also has a smaller impact on the environment. Some homes go so far as to 
                                use no utilities by being completely off-grid. Also, with less consumption comes less waste going into landfills.
                                </p>

                                <h2>Challenges of Going Tiny</h2>
                                <p>
                                While there are significant advantages and benefits of joining the tiny house movement, there are also challenges 
                                that need to be overcome before you take the plunge.
                                </p>
                                <h3>Where to Park your Tiny House</h3>
                                <p>
                                Probably the biggest challenge that people face with transitioning to a tiny house is finding a legal place to put their home.
                                Codes and laws change from state to state, county to county, and even city to city. This doesn’t make it easy to just pull in 
                                and say, “I am going to buy this property and place my tiny house on it and live carefree!” Many places will tell you that you 
                                cannot live in a vehicle on the property for more than 30 consecutive days (because they consider the tiny house an RV).
                                </p>
                                <h3> Financing and Insurance </h3>
                                <p>
                                Financing and insurance can be a challenge as well. Financing and insurance companies rely on having accurate values for the 
                                items they finance and insure, and with tiny houses those values aren’t always reliable or clear. For instance, if an individual 
                                built their own house and did so incorrectly, their structure could potentially be worthless.
                                </p>
                                <p>
                                As the demand for tiny houses grows and the market becomes more mature, we are seeing more and more companies willing to take the
                                risk with tiny houses. There are now big companies offering financing and insurance for them.
                                </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default Tiny;