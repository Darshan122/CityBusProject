import React from 'react'
import './newletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to now are daily updates.</h2>
                        <div className="newsletter__input">
                            <input type='email' placeholder='Enter your email'/>
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Subscribe now to now are daily updates.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter_img">
                        <img src={maleTourist} alt=''/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewLetter