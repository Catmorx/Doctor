package com.doctors.repository;

import com.doctors.model.ReserveQualificationModel;
import com.doctors.repository.crudrepository.ReserveQualificationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ReserveQualificationRepository {

    @Autowired
    private ReserveQualificationCrudRepository reserveQualificationCrudRepository;

    public List<ReserveQualificationModel> getAllReserveQualifications(){
        return (List<ReserveQualificationModel>) reserveQualificationCrudRepository.findAll();
    }
    public Optional<ReserveQualificationModel> getReserveQualification(Integer id){
        return reserveQualificationCrudRepository.findById(id);
    }

    public ReserveQualificationModel saveReserveQualification(ReserveQualificationModel reserveQualificationModel){
        return reserveQualificationCrudRepository.save(reserveQualificationModel);
    }
    public boolean deleteReserveQualification(Integer id){
        reserveQualificationCrudRepository.deleteById(id);
        return true;
    }
    public ReserveQualificationModel updateReserveQualification(ReserveQualificationModel reserveQualificationModel){
        return reserveQualificationCrudRepository.save(reserveQualificationModel);
    }
}
