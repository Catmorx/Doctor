package com.doctors.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "message")
public class MessageModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMessage;

    @Column(name = "messageText", nullable = false, length = 250)
    private String messageText;

    //@Column(name = "iddoctor", nullable = false, length = 250) RELACION FK
    //private Integer iddoctor;


    public MessageModel() {
    }

    public Integer getIdMessage() {
        return idMessage;
    }

    public void setIdMessage(Integer idMessage) {
        this.idMessage = idMessage;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public MessageModel(Integer idMessage, String messageText) {
        this.idMessage = idMessage;
        this.messageText = messageText;
    }

    public MessageModel(String messageText) {
        this.messageText = messageText;
    }
}
