package com.doctors.repository.crudrepository;

import com.doctors.model.ReservationModel;
import com.doctors.model.ReserveQualificationModel;
import org.springframework.data.repository.CrudRepository;

public interface ReserveQualificationCrudRepository extends CrudRepository<ReserveQualificationModel, Integer> {
}
