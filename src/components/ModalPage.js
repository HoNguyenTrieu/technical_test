import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { leadActions } from "../redux/actions/lead.action";

const ModalPage = ({ show, handleClose, handleShow }) => {
  const [leadData, setLeadData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    location_type: "City",
    location_string: "",
  });

  const dispatch = useDispatch();
  const leads = useSelector((state) => state.leads.leads);
  const newLead = useSelector((state) => state.leads.newLead);

  const handleChange = (e) => {
    setLeadData({ ...leadData, [e.target.name]: e.target.value });
    console.log(leadData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(leadActions.createLead(leadData));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                name="first_name"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="last_name"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                required
                name="mobile"
                type="number"
                placeholder="mobile number"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Location Type</Form.Label>
              <Form.Control
                required
                name="location_type"
                as="select"
                onChange={handleChange}
              >
                <option>City</option>
                <option>Zip</option>
                <option>Country</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Location String</Form.Label>
              <Form.Control
                required
                name="location_string"
                type="text"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalPage;
