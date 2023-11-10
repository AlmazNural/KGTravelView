import React from 'react'
import './comon-section.css'
import { Container, Row, Col } from 'reactstrap'

const ComonSection = ({title}) => {
  return (
    <section className='comon__section'>
        <Container>
            <Row>
                <Col lg='12'>
                  
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ComonSection