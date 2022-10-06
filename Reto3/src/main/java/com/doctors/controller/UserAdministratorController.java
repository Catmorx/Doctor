package com.doctors.controller;

import com.doctors.model.UserAdministratorModel;
import com.doctors.service.UserAdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/UserAdministrator")
@CrossOrigin(origins = "*")
public class UserAdministratorController {

    @Autowired
    private UserAdministratorService userAdministratorService;

    @GetMapping("/all")
    @PostMapping("/all")
    public List<UserAdministratorModel> getAllUserAdministrators() {
        return (List<UserAdministratorModel>) userAdministratorService.getAllUserAdministrators();
    }

    @PostMapping("/all")
    @ResponseStatus(HttpStatus.CREATED)
    public List<UserAdministratorModel> getAllUserAdministrators2() {
        return (List<UserAdministratorModel>) userAdministratorService.getAllUserAdministrators();
    }

    @GetMapping("{id}")
    public Optional<UserAdministratorModel> getUserAdministrator(@PathVariable Integer id) {
        return userAdministratorService.getUserAdministrator(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public UserAdministratorModel saveUserAdministrator(@RequestBody UserAdministratorModel userAdministratorModel) {
        return userAdministratorService.saveUserAdministrator(userAdministratorModel);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteUserAdministratorModel(@PathVariable Integer id) {
        userAdministratorService.deleteUserAdministrator(id);
        return true;
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public UserAdministratorModel updateUserAdministrator(@RequestBody UserAdministratorModel userAdministratorModel) {
        return userAdministratorService.updateUserAdministrator(userAdministratorModel);
    }
}
