package com.doctors.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="doctor")
public class DoctorModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //@Column(name= "specialty", nullable = false, length = 45)
    //private String specialty;
    @Column(name= "year", nullable = false, length = 4)
    private Integer year;
    @Column(name= "name", nullable = false, length = 45)
    private String name;
    private String description;

    public DoctorModel() {
    }

    public DoctorModel(Integer id, Integer year, String name, String description) {
        this.id = id;
        this.year = year;
        this.name = name;
        this.description = description;
    }

    public DoctorModel(Integer year, String name, String description) {
        this.year = year;
        this.name = name;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}