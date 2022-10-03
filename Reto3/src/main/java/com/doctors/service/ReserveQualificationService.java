package com.doctors.service;

import com.doctors.model.ReserveQualificationModel;
import com.doctors.repository.ReservationRepository;
import com.doctors.repository.ReserveQualificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReserveQualificationService {

    @Autowired
    private ReserveQualificationRepository reserveQualificationRepository;

    public List<ReserveQualificationModel> getAllReserveQualifications(){
        return reserveQualificationRepository.getAllReserveQualifications();
    }
    public Optional<ReserveQualificationModel> getReserveQualification(Integer id){
        return reserveQualificationRepository.getReserveQualification(id);
    }
    public ReserveQualificationModel saveReserveQualification(ReserveQualificationModel reserveQualificationModel){
        return reserveQualificationRepository.saveReserveQualification(reserveQualificationModel);
    }
    public boolean deleteReserveQualification(Integer id){
        reserveQualificationRepository.deleteReserveQualification(id);
        return true;
    }
    public ReserveQualificationModel updateReserveQualification(ReserveQualificationModel reserveQualificationModel){
        return reserveQualificationRepository.updateReserveQualification(reserveQualificationModel);
    }
}
