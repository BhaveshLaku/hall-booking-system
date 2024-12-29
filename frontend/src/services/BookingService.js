import axios from "axios";

const API_URL = "http://localhost:8081/api/bookings"; // Adjust as necessary

const getAllBookings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createBooking = async (booking) => {
  const response = await axios.post(API_URL, booking);
  return response.data;
};

const updateBooking = async (booking) => {
  const response = await axios.put(`${API_URL}/${booking.id}`, booking);
  return response.data;
};

const deleteBooking = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
};
