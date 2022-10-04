package com.doctors.controller;

import com.doctors.model.ReservationModel;
import com.doctors.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")
@CrossOrigin(origins = "*")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("all")
    @PostMapping("/all")
    public List<ReservationModel> getAllReservations(){
        return (List<ReservationModel>) reservationService.getAllReservations();
    }
    @GetMapping("{id}")
    public Optional<ReservationModel> getReservation(@PathVariable Integer id){
        return reservationService.getReservation(id);
    }

    @PostMapping("/save")
    public ReservationModel saveReservation(@RequestBody ReservationModel reservationModel){
        return reservationService.saveReservation(reservationModel);
    }
    @DeleteMapping("/delete")
    public boolean deleteReservation(@PathVariable Integer id){
        reservationService.deleteReservation(id);
        return true;
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public ReservationModel updateReservation(@RequestBody ReservationModel reservationModel){
        return  reservationService.updateReservation(reservationModel);
    }
}
