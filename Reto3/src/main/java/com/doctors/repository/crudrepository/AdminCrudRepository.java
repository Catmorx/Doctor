package com.doctors.repository.crudrepository;

import com.doctors.model.AdminModel;
import org.springframework.data.repository.CrudRepository;

public interface AdminCrudRepository extends CrudRepository<AdminModel, Integer> {
}
