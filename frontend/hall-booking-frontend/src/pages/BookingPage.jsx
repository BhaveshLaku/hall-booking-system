import React, { useState } from "react"; // Import React here
import axios from "axios";

const BookingPage = () => {
  const [selectedHall, setSelectedHall] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/bookings",
        { hallId: selectedHall, date, time },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert("Booking successful!");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed.");
    }
  };

  return (
    <div>
      <h1>Book a Hall</h1>
      <input
        type="text"
        placeholder="Hall ID"
        value={selectedHall}
        onChange={(e) => setSelectedHall(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleBooking}>Book</button>
    </div>
  );
};

export default BookingPage;
