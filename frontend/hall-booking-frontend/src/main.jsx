import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/bookings")
      .then((response) => {
        console.log("Data fetched from backend:", response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.bookingId}>{booking.applicantName}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
