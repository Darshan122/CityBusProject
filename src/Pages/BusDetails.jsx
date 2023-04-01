import React from "react";
import "../styles/busDetails.css";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter"

const BusDetails = () => {
  const { id } = useParams();

  const tours = tourData.find((tours) => tours.id === id);

  const { photo,address,city } = tours; // try
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt=" " />
                <div className="tour__info">
                <h2> {tours.title}</h2>
                <div className="d-flex align-items-center gap-5">
                  <span className="d-flex align-items-center gap-1"></span>
                </div>
                <h2> {tours.city}</h2>
                <h5> {tours.price}</h5>

                <span>
                <i class="ri-map-pin-fill"></i>{city}
                </span>
              </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tours={tours}/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default BusDetails;
