import React from 'react'
import '../styles/busDetails.css'
import { Container,Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'

const BusDetails = () => {

  const {id} = useParams()
  
  const tours = tourData.find(tours=> tours.id ===id)         

  const {photo} = tours.bus;
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt = " "/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default BusDetails