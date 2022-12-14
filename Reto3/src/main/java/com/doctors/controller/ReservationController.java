package com.doctors.controller;

import com.doctors.model.ReservationModel;
import com.doctors.model.reports.ReportClient;
import com.doctors.model.reports.ReportStatus;
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
    public List<ReservationModel> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @PostMapping("/all")
    @ResponseStatus(HttpStatus.CREATED)
    public List<ReservationModel> getAllReservations2() {
        return reservationService.getAllReservations();
    }

    @GetMapping("{idReservation}")
    public Optional<ReservationModel> getReservation(@PathVariable Integer idReservation) {
        return reservationService.getReservation(idReservation);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public ReservationModel saveReservation(@RequestBody ReservationModel reservationModel) {
        return reservationService.saveReservation(reservationModel);
    }

    @DeleteMapping("/{idReservation}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteReservation(@PathVariable Integer idReservation) {
        reservationService.deleteReservation(idReservation);
        return true;
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public ReservationModel updateReservation(@RequestBody ReservationModel reservationModel) {
        return reservationService.updateReservation(reservationModel);
    }
    @GetMapping("/report-dates/{startDate}/{finishDate}")
    public List<ReservationModel> getReservationPeriod(@PathVariable String startDate, @PathVariable String finishDate){
        return  reservationService.getReservationPeriod(startDate, finishDate);
    }

    @GetMapping("/report-clients")
    public List<ReportClient> getTopClient(){
        return reservationService.getTopClient();
    }

    @GetMapping("/report-status")
    public ReportStatus getReportStatus(){
        return reservationService.getReportStatus();
    }
}
