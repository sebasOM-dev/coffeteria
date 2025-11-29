package com.example.coffeteria.controller;

import com.example.coffeteria.DAO.impl.UserImpl;
import com.example.coffeteria.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserImpl ur;

    @PostMapping("addUser")
    public void addUser(@RequestBody User user){




    }


    @GetMapping("findUser")
    public User findUserByEmail(){


        return null;
    }


}
