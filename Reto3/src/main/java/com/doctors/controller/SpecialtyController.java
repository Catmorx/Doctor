package com.doctors.controller;

import com.doctors.model.SpecialtyModel;
import com.doctors.service.SpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Specialty")
@CrossOrigin(origins = "*")
public class SpecialtyController {
    @Autowired
    private SpecialtyService specialtyService;

    @GetMapping("/all")
    @PostMapping("/all")
    public List<SpecialtyModel> getAllSpecialty() {
        return specialtyService.getAllSpecialty();
    }

    @GetMapping("/{id}")
    public Optional<SpecialtyModel> getSpecialty(@PathVariable Integer id) {
        return specialtyService.getSpecialty(id);
    }

    @PostMapping("/save")
    public SpecialtyModel saveSpecialty(@RequestBody SpecialtyModel specialtyModel) {
        return specialtyService.saveSpecialty(specialtyModel);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteSpecialty(@PathVariable Integer id) {
        return specialtyService.deleteSpecialty(id);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public SpecialtyModel updateSpecialty(@RequestBody SpecialtyModel specialtyModel) {
        return specialtyService.updateSpecialty(specialtyModel);
    }
}
