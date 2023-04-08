import React from "react";
import ServicesCard from "./ServicesCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Booking System",
    desc: "We provide advance booking system. you can book your seat and enjoy your city-bus travaling",
  },
  {
    imgUrl: guideImg,
    title: "Pass System",
    desc: "For daily passenger we provide pass system so they can get more benfits.",
  },
  {
    imgUrl: customizationImg,
    title: "Bus TimeTable",
    desc: "We also provide bus timetable in this so passenger can view it.",
  },
];

const ServicesList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServicesCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServicesList;
