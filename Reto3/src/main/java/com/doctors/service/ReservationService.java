package com.doctors.service;

import com.doctors.model.ReservationModel;
import com.doctors.model.reports.ReportClient;
import com.doctors.model.reports.ReportStatus;
import com.doctors.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<ReservationModel> getAllReservations() {
        return reservationRepository.getAllReservations();
    }

    public Optional<ReservationModel> getReservation(Integer idReservation) {
        return reservationRepository.getReservation(idReservation);
    }

    public ReservationModel saveReservation(ReservationModel reservationModel) {
        return reservationRepository.saveReservation(reservationModel);
    }

    public boolean deleteReservation(Integer idReservation) {
        reservationRepository.deleteReservation(idReservation);
        return true;
    }

    public ReservationModel updateReservation(ReservationModel reservationModel) {
        return reservationRepository.updateReservation(reservationModel);
    }
    public List<ReservationModel> getReservationByStatus(String status){
        return reservationRepository.getReservationByStatus(status);
    }
    public List<ReportClient> getTopClient(){
        return reservationRepository.getTopClient();
    }
    public ReportStatus getReportStatus(){
        return reservationRepository.getReportStatus();
    }
    public List<ReservationModel> getReservationPeriod(String date1, String date2){
        SimpleDateFormat parseDate = new SimpleDateFormat("yyyy-MM-dd");
        Date startDate =  new Date();
        Date finishDate = new Date();
        try{
            startDate = parseDate.parse(date1);
            finishDate= parseDate.parse(date2);
        }catch (ParseException e){
            e.printStackTrace();
        }
        if (startDate.before(finishDate)) {
            return reservationRepository.getReservationPeriod(startDate,finishDate);
        }else{
            return new ArrayList<>();
        }
    }
}
