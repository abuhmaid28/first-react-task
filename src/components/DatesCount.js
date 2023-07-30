import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesCount = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        {person.length ? <h4>لديك {person.length} مواعيد اليوم</h4> : ""}
      </Col>
    </Row>
  );
};

export default DatesCount;
