import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import bookingService from "../services/BookingService";

const BookingForm = ({ setBookings }) => {
  const [booking, setBooking] = useState({
    applicantName: "",
    email: "",
    mobile: "",
    startDate: "",
    endDate: "",
    rent: "",
    additionalCharges: "",
    hallName: "",
    bookingType: "",
    status: "",
    applicationNumber: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = await bookingService.createBooking(booking);
    setBookings((prevBookings) => [...prevBookings, newBooking]);
    setBooking({
      applicantName: "",
      email: "",
      mobile: "",
      startDate: "",
      endDate: "",
      rent: "",
      additionalCharges: "",
      hallName: "",
      bookingType: "",
      status: "",
      applicationNumber: "",
      remarks: "",
    });
  };

  return (
    <div className="mb-4">
      <h3>Create New Booking</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="applicantName">
              <Form.Label>Applicant Name</Form.Label>
              <Form.Control
                type="text"
                name="applicantName"
                value={booking.applicantName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={booking.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={booking.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group controlId="hallName">
              <Form.Label>Hall Name</Form.Label>
              <Form.Control
                type="text"
                name="hallName"
                value={booking.hallName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3">
          Create Booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
