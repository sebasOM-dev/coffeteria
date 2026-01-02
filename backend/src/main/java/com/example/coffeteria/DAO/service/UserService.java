package com.example.coffeteria.DAO.service;

import com.example.coffeteria.model.User;

public interface UserService {

    public User getUserById(Long id);
    public User getUserByEmail(String email);
    public void addUser(User user);


}
