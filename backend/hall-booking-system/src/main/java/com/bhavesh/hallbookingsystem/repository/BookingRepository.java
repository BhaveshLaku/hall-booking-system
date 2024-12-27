package com.bhavesh.hallbookingsystem.repository;

import com.bhavesh.hallbookingsystem.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}

