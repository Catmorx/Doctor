package com.doctors.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "message")
public class MessageModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "message", nullable = false, length = 250)
    private String message;

    @Column(name = "iddoctor", nullable = false, length = 250)
    private Integer iddoctor;

    public MessageModel() {
    }

    public MessageModel(String message, Integer idDoctor) {
        this.message = message;
        this.iddoctor = idDoctor;
    }

    public MessageModel(Integer id, String message, Integer idDoctor) {
        this.id = id;
        this.message = message;
        this.iddoctor = idDoctor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getIdDoctor() {
        return iddoctor;
    }

    public void setIdDoctor(Integer idDoctor) {
        this.iddoctor = idDoctor;
    }

    @Override
    public String toString() {
        return "MessageModel{" +
                "id=" + id +
                ", message='" + message + '\'' +
                ", idDoctor=" + iddoctor +
                '}';
    }
}
