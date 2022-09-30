package com.doctors.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="doctor")
public class DoctorModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name= "specialty", nullable = false, length = 45)
    private String specialty;

    @Column(name= "name", nullable = false, length = 45)
    private String name;

    @Column(name= "graduate_year", nullable = false, length = 4)
    private Integer graduate_year;
    private String description;
    private Integer department;

    public DoctorModel() {
    }

    public DoctorModel(Integer id, String specialty, String name, Integer graduate_year, String description, Integer department) {
        this.id = id;
        this.specialty = specialty;
        this.name = name;
        this.graduate_year = graduate_year;
        this.description = description;
        this.department = department;
    }

    public DoctorModel(String specialty, String name, Integer graduate_year, String description, Integer department) {
        this.specialty = specialty;
        this.name = name;
        this.graduate_year = graduate_year;
        this.description = description;
        this.department = department;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getGraduate_year() {
        return graduate_year;
    }

    public void setGraduate_year(Integer graduate_year) {
        this.graduate_year = graduate_year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getDepartment() {
        return department;
    }

    public void setDepartment(Integer department) {
        this.department = department;
    }
}