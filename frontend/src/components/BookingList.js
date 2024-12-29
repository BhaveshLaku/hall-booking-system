import React, { useState, useEffect } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bookingService from "../services/BookingService";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    bookingService
      .getAllBookings()
      .then((data) => setBookings(data))
      .catch((error) => setError("Error fetching bookings: " + error.message));
  };

  const handleDelete = (id) => {
    bookingService
      .deleteBooking(id)
      .then(() => {
        setSuccess("Booking deleted successfully!");
        setTimeout(() => setSuccess(""), 2000);
        fetchBookings(); // Refresh the list
      })
      .catch((error) => setError("Error deleting booking: " + error.message));
  };

  return (
    <div>
      <h3>Booking List</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Button
        className="mb-3"
        variant="warning"
        onClick={() => navigate("/booking")}
      >
        Create New Booking
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Hall Name</th>
            <th>Rent</th>
            <th>Additional Charges</th> {}
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Application No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.applicantName}</td>
              <td>{booking.email}</td>
              <td>{booking.mobile}</td>
              <td>{booking.hallName}</td>
              <td>{booking.rent}</td>
              <td>{booking.additionalCharges}</td> {}
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>{booking.status}</td>
              <td>{booking.applicationNo}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/booking/${booking.id}`)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingList;
