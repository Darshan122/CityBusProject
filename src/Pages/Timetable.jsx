import React from "react";
import CommanSection from "../shared/CommanSection";
import "../styles/timetable.css";
import "../shared/OurbusCard";
import "../shared/SearchBar";
import "../shared/Newsletter";
import "../assets/data/tours";
import "../components/Ourbus/OurBusList";
import { Col, Container, Row } from "reactstrap";
import SearchBar from "../shared/SearchBar";
// import OurBusList from '../components/Ourbus/OurBusList'
// import tours from "../assets/data/tours";
import OurbusCard from "../shared/OurbusCard";
import NewLetter from "../shared/Newsletter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Timetable = () => {
  // const [pageCount, setPageCount] = useState(0);
  // const [page, setPage] = useState(0);

  // useEffect(() => {
  //   const pages = Math.ceil(5 / 4);
  //   setPageCount(pages);
  // }, [page]);

  const { data: bus, loading, error } = useFetch(`${BASE_URL}/bus`);
  // const { data: busCount } = useFetch(`${BASE_URL}/bus/search/getBusCount`);

  return (
    <>
      <CommanSection title={"All Bus TimeTable"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0" style={{ borderRadius: "5px 5px 5px 5px" }}>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {bus?.map((tour) => (
                <Col
                  lg="2"
                  className="mb-4"
                  key={tour._id}
                  style={{ width: 300 }}
                >
                  <OurbusCard bus={tour} />
                </Col>
              ))}
              {/* <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).key()].map(number => (
                    <span key={number} onClick={() => setPage(number)}>
                      {number + 1}
                    </span>
                  ))}
              </div>
            </Col> */}
            </Row>
          )}
        </Container>
      </section>
      <NewLetter />
    </>
  );
};

export default Timetable;
