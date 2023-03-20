import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

const OurbusCard = (props) => {
  const { id, title, photo, city, price, avgRating, reviews } = props.bus;
  return (
    <div className='tour__card'>
    <Card>
      <div className='tour__img'>
        <img src={photo} alt="tour-img" className='m-auto' style={{height:"200px",width:"200px"}} />
        <span>Featured</span>
      </div>

    <CardBody>
      <div className="card__top d-flex ailgin-items-center 
    justify-content-between">
        <span className='tour__location d-flex align-items-center gap-1'>
          <i class="ri-map-pin-line"></i> {city}
        </span>
        <span className='tour__rating d-flex align-items-center gap-1'>
          <i class="ri-star-fill"></i> {avgRating}{" "}
          <span>({reviews.length})</span>
        </span>
      </div>

      <h5 className=' tour__title'><Link to={`/tour/${id}`}>{title}</Link></h5>
      <div className="card__bottom d-flex align-items-center 
    justify-content-between mt-3">
        <h5>
          ${price}<span> /per person </span>
        </h5>

        <button className='btn booking__btn'>
          <Link to={`/tour/${id}`}>Book Now</Link>
        </button>
      </div>
    </CardBody>
      </Card>
  </div>
  )
}

export default OurbusCard