import React from "react";
import bookingService from "../services/BookingService";

const BookingItem = ({ booking }) => {
  const handleDelete = async () => {
    try {
      await bookingService.deleteBooking(booking.applicationNumber);
      alert("Booking deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <li>
      <div>
        <strong>{booking.applicantName}</strong>
        <p>{booking.hallName}</p>
        <p>
          {booking.startDate} to {booking.endDate}
        </p>
        <p>Status: {booking.status}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default BookingItem;
