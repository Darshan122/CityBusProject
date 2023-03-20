import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../../src/assets/images/bus1.jpg"
import heroImg02 from '../assets/images/bus2.jpg'
import heroVideo from '../assets/images/busvideo.mp4'
import expericenceImg from '../assets/images/bus1.jpg'
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/citybus1.png'

import SearchBar from '../shared/SearchBar';
import ServicesList from '../services/ServicesList';
import OurBusList from '../components/Ourbus/OurBusList';
import BusImage from  '../components/Image-gallery/BusImages'
import Teams from '../components/Teams/Teams';
import NewLetter from '../shared/Newsletter';

import OurbusCard from '../shared/OurbusCard';


const Homes = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center  ">
                  <Subtitle subtitle={'Know Before you GO'} />
                  <img src={worldImg} alt="" />
                </div>

                <h1>
                  Welcome To Your  {" "}
                  <span className="highlight">CityBus</span>
                </h1>
                <p>City bus system is web-based application. City Bus System provides bus transportation system, a facility to reservation se, cancellation seats and different types of enquiries which need an instant and quick reservation.
                  •	CityBus is built for manage and computerize the traditional database, ticket booking and tracking bus and travel made easy. It maintains all data of users, bus details, reservation details, booking details, customer details.
                </p>
              </div>

            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we server</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={"Explore"} />
              <h2 className='featured__tour-title'>Our Bus</h2>
            </Col>
            <OurBusList />
       
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Expernce'}></Subtitle>
                <h2>with our all experience <br />we will save you</h2>
                <p>we provide best service to are passenger
                  <br />We have most HAAPY PASSENGER!!
                </p>
              </div>
              <div className="conuter__wrapper d-flex align-item-center gap-5">
                <div className="counter__box">
                  <span>5</span>
                  <h6> Years celebertions</h6>
                </div>
                <div className="counter__box">
                  <span>50 </span>
                  <h6>CityBus</h6>
                </div>
                <div className="counter__box">
                  <span>5K+</span>
                  <h6>passenger travels</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience__img'>
                <img src={expericenceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
        <Row>
          <Col lg="20">
          <Subtitle subtitle={'Bus'}/>
            <h2 className="gallery__title">Visit are CityBus  </h2>
          
          </Col>
          <Col lg='12'>
            <BusImage/>
          </Col>
        </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
            <Subtitle subtitle={'Our Team'}></Subtitle>
            <h2 className="team__title">
              About Teams
            </h2>
            </Col>
            <Col lg='12'>
              <Teams/>
            </Col>
          </Row>
        </Container>
      </section>
      <NewLetter/>
    </>
  );
};

export default Homes