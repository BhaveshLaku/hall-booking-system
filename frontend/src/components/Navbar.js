import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/bookings">View Bookings</Link>
        </li>
        <li>
          <Link to="/create">Create Booking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
