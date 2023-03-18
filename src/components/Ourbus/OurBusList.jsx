import React from 'react'
import OurbusCard from '../../shared/OurbusCard'
import busData from '../../assets/data/tours'
import { Col } from 'reactstrap'

const OurBusList = () => {
  return (
    <>
    {
    busData?.map(tour => (
      <Col lg='3' className='mb-4' key={tour.id}>
        <OurbusCard bus={tour}/>

      </Col>
    ))}
    </>
  )
}

export default OurBusList