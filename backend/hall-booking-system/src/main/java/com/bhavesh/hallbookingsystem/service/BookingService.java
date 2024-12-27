package com.bhavesh.hallbookingsystem.service;

import com.bhavesh.hallbookingsystem.entity.Booking;

import java.util.List;

public interface BookingService {
    Booking addBooking(Booking booking);
    List<Booking> getAllBookings();
    Booking updateBooking(Long id, Booking bookingDetails);
    void deleteBooking(Long id);
}
