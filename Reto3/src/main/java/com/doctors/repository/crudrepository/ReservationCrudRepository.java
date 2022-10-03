package com.doctors.repository.crudrepository;

import com.doctors.model.ReservationModel;
import org.springframework.data.repository.CrudRepository;

public interface ReservationCrudRepository extends CrudRepository<ReservationModel, Integer> {
}
