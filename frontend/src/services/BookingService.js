import axios from "axios";

// Set up the base URL for your API
const API_URL = "http://localhost:8081/api/bookings"; // Adjust if needed

// Get all bookings
const getAllBookings = () => {
  return axios
    .get(API_URL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error fetching the bookings!", error);
      throw error;
    });
};

// Create a new booking
const createBooking = (booking) => {
  return axios
    .post(API_URL, booking)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error creating the booking!", error);
      throw error;
    });
};

// Delete a booking
const deleteBooking = (id) => {
  return axios
    .delete(`${API_URL}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        `There was an error deleting the booking with ID ${id}!`,
        error
      );
      throw error;
    });
};

export default {
  getAllBookings,
  createBooking,
  deleteBooking,
};
