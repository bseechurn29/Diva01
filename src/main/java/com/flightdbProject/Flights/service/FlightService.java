package com.flightdbProject.Flights.service;
import com.flightdbProject.Flights.Flight;
import com.flightdbProject.Flights.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FlightService {
    private final FlightRepository flightRepository;

    @Autowired
    public FlightService(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    public Page<Flight> getFlightsPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return flightRepository.findAll(pageable);
    }

    public void save(Flight flight) {
        flightRepository.save(flight);
    }

}
