package com.bhavesh.hallbookingsystem.service;

import com.bhavesh.hallbookingsystem.entity.Booking;
import com.bhavesh.hallbookingsystem.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public Booking addBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking updateBooking(Long id, Booking bookingDetails) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            booking.setApplicantName(bookingDetails.getApplicantName());
            booking.setEmail(bookingDetails.getEmail());
            booking.setMobile(bookingDetails.getMobile());
            booking.setStartDate(bookingDetails.getStartDate());
            booking.setEndDate(bookingDetails.getEndDate());
            booking.setRent(bookingDetails.getRent());
            booking.setAdditionalCharges(bookingDetails.getAdditionalCharges());
            booking.setHallName(bookingDetails.getHallName());
            booking.setBookingType(bookingDetails.getBookingType());
            booking.setStatus(bookingDetails.getStatus());
            booking.setApplicationNo(bookingDetails.getApplicationNo());
            booking.setRemark(bookingDetails.getRemark());
            return bookingRepository.save(booking);
        } else {
            throw new RuntimeException("Booking not found with id: " + id);
        }
    }

    @Override
    public void deleteBooking(Long id) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isPresent()) {
            bookingRepository.delete(optionalBooking.get());
        } else {
            throw new RuntimeException("Booking not found with id: " + id);
        }
    }
}
