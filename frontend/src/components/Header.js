import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">MyBooking</div> {}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Booking">Book Hall</Link>
        <Link to="/">View Bookings</Link>
      </nav>
    </header>
  );
};

export default Header;
