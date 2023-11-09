import React from 'react'
import newsletter from '../shared/newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return <section className='newletter'>
    <Container>
        <Row>

            <Col lg='6'>
                <div className="newslatter__content">
                    <h2>Write us your email address and we will contact you and advise</h2>

                    <div className='newslatter__input'>
                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn newsletter__btn'> 
                         Subscribe
                        </button>
                    </div>

                    <p>We wish to improve our service and help you learn information about our tours.
                    Our goal is to make your days colorful and bright</p>

                </div>
            </Col>

            <Col lg='6'>
                <div className='newslatter__img'>
                    <img src={maleTourist} alt='maleTourist' />

                </div>
            </Col>

        </Row>
    </Container>
  </section>
}

export default Newsletter