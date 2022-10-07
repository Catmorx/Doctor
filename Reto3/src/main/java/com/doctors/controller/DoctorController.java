package com.doctors.controller;

import com.doctors.model.DoctorModel;
import com.doctors.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController //Controlador de tipo Rest, nos permite llamados HTTP
@RequestMapping("/api/Doctor") //api/doctor es el path
@CrossOrigin(origins = "*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/all")
    @PostMapping("/all")
    public List<DoctorModel> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @PostMapping("/all")
    @ResponseStatus(HttpStatus.CREATED)
    public List<DoctorModel> getAllDoctors2() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public Optional<DoctorModel> getDoctor(@PathVariable Integer id) { //
        return doctorService.getDoctor(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public DoctorModel saveDoctor(@RequestBody DoctorModel doctorModel) {
        return doctorService.saveDoctor(doctorModel);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteDoctor(@PathVariable Integer id) {
        doctorService.deleteDoctor(id);
        return true;
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public DoctorModel updateDoctor(@RequestBody DoctorModel doctorModel) {
        return doctorService.updateDoctors(doctorModel);
    }
}