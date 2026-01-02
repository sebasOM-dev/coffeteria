package com.example.coffeteria.DAO.impl;

import com.example.coffeteria.DAO.repository.UserTypeRepository;
import com.example.coffeteria.DAO.service.UserTypeService;
import com.example.coffeteria.model.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserTypeImpl implements UserTypeService {

    @Autowired
    UserTypeRepository utr;

    @Override
    public UserType getUserTypeById(Long id) {
        return utr.findById(id).orElse(null);
    }

    @Override
    public UserType getUserTypeByName(String name) {
        return utr.getUserTypeByName(name);
    }

    @Override
    public void addUser(UserType userType) {
        utr.save(userType);
    }
}
