// Dependencies
import React, {useEffect, useState} from "react"
import Carousel from "react-bootstrap/Carousel"

// Styles
import "../styles.css"

const Main = props => {

    return <>
        <main>
            <div className="main-container">
                <div className="carousel">
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://media-cdn.tripadvisor.com/media/photo-s/03/69/0b/15/cyclops.jpg"
                                alt="First Slide"
                            />
                            <Carousel.Caption>
                                <h4>Hey, look!</h4>
                                <p>it's us!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://i.imgur.com/vSfrvUA.jpeg"
                                alt="Second Slide"
                            />
                            <Carousel.Caption>
                                <h4>Tenemos cubanos</h4>
                                <p>Muy delicioso</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pint-1523627402.jpg"
                                alt="Third Slide"
                            />
                            <Carousel.Caption>
                                <h4>Beers</h4>
                                <p>Yep, we got em</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://assets3.thrillist.com/v1/image/2899340/750x500/flatten;crop;webp=auto;jpeg_quality=50.jpg/800x400?text=Fourth slide&bg=373940"
                                alt="Fourth Slide"
                            />
                            <Carousel.Caption>
                                <h4>Cocktails</h4>
                                <p>Be a real fancy boy</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img 
                                className="d-block w-100"
                                src="https://images.fineartamerica.com/images-medium-large/welcome-to-belltown-kym-backland.jpg"
                                alt="Fifth Slide"
                            />
                            <Carousel.Caption>
                                <h4>You'll never guess</h4>
                                <p>where in Seattle we're located</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
                <div className="main-description">
                    <h3>Who am I? Am I... Belltown?</h3>
                    <p>Voted "Best Bar In Belltown" by at least one Belltown resident (you'll never guess who), this is the go-to spot for burgs, brunch, or just general boozy shenanigans.</p><br/>
                    <p>We've got burgers. We've got brunch. We've got beers. We've got bwhiskey. We've got Belltown.</p><br/>
                    <p>Come give us money in exchange for alcohol so we can pay our  crazy expensive Seattle rent please.</p>
                </div>
            </div>
        </main>
    </>
}

export default Main