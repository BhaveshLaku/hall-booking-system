import React from "react";
import { Table, Button } from "react-bootstrap";
import bookingService from "../services/BookingService";

const BookingList = ({ bookings }) => {
  const handleDelete = async (id) => {
    await bookingService.deleteBooking(id);
    window.location.reload(); // Refresh the page to fetch new data
  };

  return (
    <div>
      <h3>Booking List</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Hall Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.applicantName}</td>
              <td>{booking.email}</td>
              <td>{booking.hallName}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
              <td>
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
