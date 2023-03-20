import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

const OurbusCard = (tours) => {
  const { id, title, photo, city, price, avgRating, reviews } = tours.bus;
  return (
    <div className='tour__card'>
    <Card className='card' style={{border:'non', boxShadow:' rgba(0, 0, 0, 0.2) 0px 18px 50px -10px'}}>
      <div className='tour__img' style={{ position: 'relative'}}>
        <img src={photo} alt="tour-img" className='m-auto' style={{width:"305px", borderRadius:"5px 5px 5px 5px"}} />
        <span className='span' style={{ position: 'absolute', bottom: 0, right: 900, width: 'max-content', height: 'max-content', zIndex:10,  background: 'var(--primary-color),  color: #fff', borderRadius: "3px 0 0 0"}}>Featured</span>
      </div>

    <CardBody>
      <div className="card__top d-flex ailgin-items-center 
    justify-content-between" >
        <span className='tour__location d-flex align-items-center gap-1'>
          <i class="ri-map-pin-line" style={{color:'var(--secondary-color)'}}></i> {city}
        </span>
        <span className='tour__rating d-flex align-items-center gap-1' style={{fontSize:'0.9rem', color:'var(--text-color)'}}>
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