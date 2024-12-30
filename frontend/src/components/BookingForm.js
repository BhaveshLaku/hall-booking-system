import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import bookingService from "../services/BookingService";

// Helper function to generate a random 7-digit number
const generateApplicationNo = () => {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};

const BookingForm = () => {
  const [booking, setBooking] = useState({
    applicantName: "",
    email: "",
    mobile: "",
    startDate: "",
    endDate: "",
    rent: 0,
    additionalCharges: 0,
    hallName: "", // this will hold the selected hall name
    bookingType: "",
    status: "Pending",
    remark: "",
    applicationNo: generateApplicationNo(),
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      bookingService
        .getAllBookings()
        .then((bookings) => {
          const currentBooking = bookings.find((b) => b.id === parseInt(id));
          if (currentBooking) setBooking(currentBooking);
        })
        .catch((error) =>
          setError("Error fetching booking details: " + error.message)
        );
    } else {
      const today = new Date().toLocaleDateString("en-CA");
      setBooking((prevBooking) => ({
        ...prevBooking,
        startDate: today,
        endDate: today,
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date range
    const startDate = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);
    if (startDate > endDate) {
      setError("End date cannot be before the start date.");
      return;
    }

    // Submit form data
    bookingService
      .createBooking(booking)
      .then(() => {
        setSuccess("Booking created successfully!");
        navigate("/");
      })
      .catch((error) => setError("Error creating booking: " + error.message));
  };

  // Predefined list of hall names
  const hallNames = [
    "Grand Hall",
    "Silver Hall",
    "Emerald Hall",
    "Crystal Hall",
    "Diamond Hall",
    "Platinum Hall",
    "Royal Hall",
    "Majestic Hall",
    "Regal Hall",
    "Prestige Hall",
  ];

  return (
    <div className="booking-form-container">
      <h3>{id ? "Edit Reservation" : "Book Your Hall"}</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Label>
            Applicant Name <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="applicantName"
            value={booking.applicantName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            Email <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={booking.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            Mobile <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={booking.mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            Hall Name <span className="required">*</span>
          </Form.Label>
          <Form.Control
            as="select"
            name="hallName"
            value={booking.hallName}
            onChange={handleChange}
            required
          >
            <option value="">Select Hall</option>
            {hallNames.map((hall, index) => (
              <option key={index} value={hall}>
                {hall}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            Booking Type <span className="required">*</span>
          </Form.Label>
          <Form.Control
            as="select"
            name="bookingType"
            value={booking.bookingType}
            onChange={handleChange}
            required
          >
            <option value="">Select Booking Type</option>
            <option value="Individual">Individual</option>
            <option value="Corporate">Corporate</option>
            <option value="Community">Community</option>
            <option value="Others">Others</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            Start Date <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={booking.startDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            End Date <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={booking.endDate}
            onChange={handleChange}
            required
            min={booking.startDate}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>
            Rent <span className="required">*</span>
          </Form.Label>
          <Form.Control
            type="number"
            name="rent"
            value={booking.rent}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Additional Charges</Form.Label>
          <Form.Control
            type="number"
            name="additionalCharges"
            value={booking.additionalCharges}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Remarks</Form.Label>
          <Form.Control
            as="textarea"
            name="remark"
            value={booking.remark}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id ? "Update" : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default BookingForm;
