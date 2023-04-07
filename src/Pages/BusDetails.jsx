import React, { useContext } from "react";
import "../styles/busDetails.css";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const BusDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  // fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/bus/${id}`);

  const { photo, title, desc, price, address, city, distance, maxGroupsize } =
    tour; // try
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt=" " />
                  <div className="tour__info">
                    <h2> {title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="d-flex align-items-center gap-1"></span>
                    </div>
                    <h2> {city}</h2>
                    <h5> {price}</h5>

                    <span>
                      <i class="ri-map-pin-fill"></i>
                      {city}
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tours={tour} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default BusDetails;
