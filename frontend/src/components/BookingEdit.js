import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const BookingEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    applicant_name: "",
    email: "",
    mobile: "",
    start_date: "",
    end_date: "",
    rent: "",
    additional_charges: "",
    hall_name: "",
    booking_type: "",
    status: "Confirmed",
    application_no: "",
    remark: "",
  });

  // Fetch booking details by ID
  useEffect(() => {
    const fetchBooking = async () => {
      const response = await fetch(`http://localhost:8081/api/bookings/${id}`);
      const data = await response.json();
      setBooking(data);
    };

    fetchBooking();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  // Handle form submission to update booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBooking = {
      ...booking,
      rent: parseFloat(booking.rent),
      additional_charges: parseFloat(booking.additional_charges),
    };

    try {
      await fetch(`http://localhost:8081/api/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      });
      alert("Booking updated successfully!");
      navigate("/"); // Redirect to the booking list after saving
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <div>
      <h3>Edit Booking</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formApplicantName">
          <Form.Label>Applicant Name</Form.Label>
          <Form.Control
            type="text"
            name="applicant_name"
            value={booking.applicant_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={booking.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={booking.mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="start_date"
            value={booking.start_date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="end_date"
            value={booking.end_date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formRent">
          <Form.Label>Rent</Form.Label>
          <Form.Control
            type="number"
            name="rent"
            value={booking.rent}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAdditionalCharges">
          <Form.Label>Additional Charges</Form.Label>
          <Form.Control
            type="number"
            name="additional_charges"
            value={booking.additional_charges}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formHallName">
          <Form.Label>Hall Name</Form.Label>
          <Form.Control
            type="text"
            name="hall_name"
            value={booking.hall_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBookingType">
          <Form.Label>Booking Type</Form.Label>
          <Form.Control
            type="text"
            name="booking_type"
            value={booking.booking_type}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
            value={booking.status}
            onChange={handleChange}
            required
          >
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formApplicationNo">
          <Form.Label>Application No</Form.Label>
          <Form.Control
            type="text"
            name="application_no"
            value={booking.application_no}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formRemark">
          <Form.Label>Remark</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="remark"
            value={booking.remark}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingEdit;
