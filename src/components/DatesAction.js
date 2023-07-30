import React from "react";
import { Button, Col, Row } from "react-bootstrap";
const DatesAction = ({ onDeleteData, onViewData }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="d-flex justify-content-between">
        <Button
          onClick={onDeleteData}
          className="btn btn-lg px-2 px-sm-4 btn-dark"
        >
          مسح الكل
        </Button>
        <Button
          onClick={onViewData}
          className="btn btn-lg px-2 px-sm-4 btn-dark"
        >
          عرض البيانات
        </Button>
      </Col>
    </Row>
  );
};

export default DatesAction;
