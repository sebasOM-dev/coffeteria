package com.example.coffeteria.DAO.impl;

import com.example.coffeteria.DAO.repository.UserRepository;
import com.example.coffeteria.DAO.service.UserService;
import com.example.coffeteria.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserImpl implements UserService {

    @Autowired
    UserRepository ur;

    @Override
    public User getUserById(Long id) {
        return ur.findById(id).orElse(null);
    }

    @Override
    public User getUserByEmail(String email) {
        return ur.getUserByEmail(email);
    }

    @Override
    public void addUser(User user) {
        ur.save(user);
    }
}
