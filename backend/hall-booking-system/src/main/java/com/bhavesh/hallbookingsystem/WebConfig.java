package com.bhavesh.hallbookingsystem;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")               // Apply to all API endpoints (e.g., /api/bookings)
                .allowedOrigins("http://localhost:5173")  // Allow requests from React frontend running on port 3000
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow the necessary HTTP methods
                .allowedHeaders("*");  // Allow all headers
    }
}
