import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col className="py-2 mt-2 mb-3 shadow-lg rounded-3" sm="8">
        {person.length ? (
          person.map((item) => {
            return (
              <div
                key={item.id}
                className="d-flex gap-2 my-2 p-2 border-bottom align-items-center"
              >
                <img
                  className="rounded-circle img-avatar img-fluid"
                  src={item.img}
                  alt="person"
                />
                <div className="d-flex flex-column">
                  <p className="m-0 fs-5 fw-semibold">{item.name}</p>
                  <p>
                    {item.date} - {item.description}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="py-5 text-center">ليس لديك أي مواعيد اليوم</h2>
        )}
      </Col>
    </Row>
  );
};

export default DatesList;
