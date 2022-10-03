package com.doctors.model;

import javax.persistence.*;

@Entity
@Table(name = "score")
public class ReserveQualificationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer Qualification;
    private String message;

    public ReserveQualificationModel() {
    }

    public ReserveQualificationModel(Integer qualification, String message) {
        Qualification = qualification;
        this.message = message;
    }

    public ReserveQualificationModel(Integer id, Integer qualification, String message) {
        this.id = id;
        Qualification = qualification;
        this.message = message;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQualification() {
        return Qualification;
    }

    public void setQualification(Integer qualification) {
        Qualification = qualification;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
