import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BookingList />} />
          <Route path="/booking/:id?" element={<BookingForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
