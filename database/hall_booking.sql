CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    applicant_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    rent NUMERIC(10, 2) NOT NULL,
    additional_charges NUMERIC(10, 2),
    hall_name VARCHAR(255) NOT NULL,
    booking_type VARCHAR(50),
    status VARCHAR(50) NOT NULL,
    application_no VARCHAR(50) UNIQUE NOT NULL,
    remark TEXT
);

-- Procedures
CREATE OR REPLACE FUNCTION insert_booking(
    p_applicant_name VARCHAR,
    p_email VARCHAR,
    p_mobile VARCHAR,
    p_start_date DATE,
    p_end_date DATE,
    p_rent NUMERIC,
    p_additional_charges NUMERIC,
    p_hall_name VARCHAR,
    p_booking_type VARCHAR,
    p_status VARCHAR,
    p_application_no VARCHAR,
    p_remark TEXT
) RETURNS VOID AS $$
BEGIN
    INSERT INTO bookings (
        applicant_name, email, mobile, start_date, end_date, rent, 
        additional_charges, hall_name, booking_type, status, application_no, remark
    ) VALUES (
        p_applicant_name, p_email, p_mobile, p_start_date, p_end_date, p_rent, 
        p_additional_charges, p_hall_name, p_booking_type, p_status, p_application_no, p_remark
    );
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_all_bookings()
RETURNS TABLE (
    id INT,
    applicant_name VARCHAR,
    email VARCHAR,
    mobile VARCHAR,
    start_date DATE,
    end_date DATE,
    rent NUMERIC,
    additional_charges NUMERIC,
    hall_name VARCHAR,
    booking_type VARCHAR,
    status VARCHAR,
    application_no VARCHAR,
    remark TEXT
) AS $$
BEGIN
    RETURN QUERY SELECT * FROM bookings;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION update_booking(
    p_id INT,
    p_applicant_name VARCHAR,
    p_email VARCHAR,
    p_mobile VARCHAR,
    p_start_date DATE,
    p_end_date DATE,
    p_rent NUMERIC,
    p_additional_charges NUMERIC,
    p_hall_name VARCHAR,
    p_booking_type VARCHAR,
    p_status VARCHAR,
    p_application_no VARCHAR,
    p_remark TEXT
) RETURNS VOID AS $$
BEGIN
    UPDATE bookings
    SET
        applicant_name = p_applicant_name,
        email = p_email,
        mobile = p_mobile,
        start_date = p_start_date,
        end_date = p_end_date,
        rent = p_rent,
        additional_charges = p_additional_charges,
        hall_name = p_hall_name,
        booking_type = p_booking_type,
        status = p_status,
        application_no = p_application_no,
        remark = p_remark
    WHERE id = p_id;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION delete_booking(p_id INT)
RETURNS VOID AS $$
BEGIN
    DELETE FROM bookings WHERE id = p_id;
END;
$$ LANGUAGE plpgsql;




-- Insert a booking
SELECT insert_booking(
    'John Doe', 'john@example.com', '9876543210', 
    '2024-01-01', '2024-01-05', 5000, 1000, 
    'Banquet Hall', 'Wedding', 'Confirmed', 
    'BK001', 'Everything confirmed'
);

-- Fetch all bookings
SELECT * FROM get_all_bookings();

SELECT * FROM booking;

-- Update a booking
SELECT update_booking(
    1, 'John Updated', 'john.updated@example.com', '1234567890', 
    '2024-01-02', '2024-01-06', 5500, 1500, 
    'Updated Hall', 'Updated Type', 'Updated Status', 
    'BK001', 'Updated Remark'
);

-- Delete a booking
SELECT delete_booking(1);
