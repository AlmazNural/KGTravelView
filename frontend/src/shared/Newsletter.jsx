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
                    <h2>Lorem ipsum amet consectetur, quam pariatur magnam quod.</h2>

                    <div className='newslatter__input'>
                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn newsletter__btn'> 
                         Subscribe
                        </button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, qui esse eos hic voluptatum beatae.</p>

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