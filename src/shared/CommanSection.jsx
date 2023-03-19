import React from 'react'
import './comman-section.css'
import { Container, Row, Col } from 'reactstrap'

const CommanSection = ({title}) => {
  return (
    <section className="comman__section">
         <Container>
            <Row>
                <Col>
                <h1>{title}</h1>
                </Col>
            </Row>
         </Container>
    </section>
  )
}

export default CommanSection