import React, { useState, useEffect } from "react";
import "./App.css"; // Custom CSS for styling
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

function App() {
  const [bookings, setBookings] = useState([]);

  // Fetch all bookings on component mount
  useEffect(() => {
    const fetchBookings = async () => {
      const data = await fetch("http://localhost:8081/api/bookings");
      const bookings = await data.json();
      setBookings(bookings);
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Hall Booking System</h1>
      <BookingForm setBookings={setBookings} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;
