package com.doctors.service;

import com.doctors.model.MessageModel;
import com.doctors.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<MessageModel> getAllMessage() {
        return messageRepository.getAllMessage();
    }

    public Optional<MessageModel> getMessage(Integer id) {
        return messageRepository.getMessage(id);
    }

    public MessageModel saveMessage(MessageModel messageModel) {
        return messageRepository.saveMessage(messageModel);
    }

    public boolean deleteMessage(Integer id) {
        return messageRepository.deleteMessage(id);
    }

    public MessageModel updateMessage(MessageModel messageModel) {
        return messageRepository.updateMessage(messageModel);
    }

}
