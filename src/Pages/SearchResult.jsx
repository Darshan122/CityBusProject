import React, { useState } from "react";

import CommonSection from "../shared/CommanSection";
import { Col, Container, Row } from "reactstrap";
import { useLocation } from "react-router-dom";

import OurbusCard from "../shared/OurbusCard";
import Newsletter from "../shared/Newsletter";

const SearchResult = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Bus Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No bus found</h4>
            ) : (
              data?.map((bus) => (
                <Col lg="3" className="mb-4" key={bus._id}>
                  <OurbusCard bus={bus} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResult;
