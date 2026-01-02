package com.example.coffeteria.DAO.service;
import com.example.coffeteria.model.UserType;

public interface UserTypeService {

    public UserType getUserTypeById(Long id);
    public UserType getUserTypeByName(String name);
    public void addUser(UserType userType);


}
