import React,{useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const Booking = ({tours}) => {

    const {price,avgRating} = tours
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        useId: '01',
        userEmail: 'abc@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt:''
    })

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 10 
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)
    const handlerClick = e=>{
        e.preventDefault()

        navigate('/Thank-You')
    }
  return  <div className="booking">
    <div className="booking__top d-flex align-item-center justifiy-content-between">
        <h3>{price} <span>/per person</span></h3>
        <span className='booking__bottom d-flex align-item-center'>
            <i class='ri-stare-s-fill'></i>
            {avgRating === 0 ? null : avgRating} 
        </span>
    </div>
    <div className="booking__from">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handlerClick}>
            <FormGroup>
                <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}></input>
            </FormGroup>
            <FormGroup>
                <input type='number' placeholder='Phone No' id='phone' required onChange={handleChange}></input>
            </FormGroup>
            <FormGroup className='d-flex align-item-center gap-3'>
                <input type='date' placeholder='' id='bookAt' required onChange={handleChange}></input>
                <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}></input>
            </FormGroup>
        </Form>
    </div>

    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-item-center gap-1'>{price} <i class="ri-close-line"></i> 1 person</h5>
                <span>{price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service charge</h5>
                <span>₹{serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span>₹30</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn primary__btn w-100 mt-4' onClick={handlerClick}>Book Now</Button>
    </div>
  </div>
  
}

export default Booking