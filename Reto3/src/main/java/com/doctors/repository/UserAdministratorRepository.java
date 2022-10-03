package com.doctors.repository;

import com.doctors.model.UserAdministratorModel;
import com.doctors.repository.crudrepository.UserAdministratorCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserAdministratorRepository {

    @Autowired
    private UserAdministratorCrudRepository userAdministratorCrudRepository;

    public List<UserAdministratorModel> getAllUserAdministrators(){
        return (List<UserAdministratorModel>) userAdministratorCrudRepository.findAll();
    }
    public Optional<UserAdministratorModel> getUserAdministrator(Integer id){
        return userAdministratorCrudRepository.findById(id);
    }
    public UserAdministratorModel saveUserAdministrator(UserAdministratorModel userAdministratorModel){
        return userAdministratorCrudRepository.save(userAdministratorModel);
    }
    public boolean deleteUserAdministrator(Integer id){
        userAdministratorCrudRepository.deleteById(id);
        return true;
    }
    public UserAdministratorModel updateUserAdministrator(UserAdministratorModel userAdministratorModel){
        return userAdministratorCrudRepository.save(userAdministratorModel);
    }
}
