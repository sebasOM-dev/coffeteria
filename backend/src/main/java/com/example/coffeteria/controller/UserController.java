package com.example.coffeteria.controller;

import com.example.coffeteria.DAO.impl.UserImpl;
import com.example.coffeteria.DAO.impl.UserTypeImpl;
import com.example.coffeteria.DTO.UserLoginDTO;
import com.example.coffeteria.DTO.UserRegisterDTO;
import com.example.coffeteria.model.User;
import com.example.coffeteria.model.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserImpl ur;

    @Autowired
    UserTypeImpl utr;

    @PostMapping("addUser")
    public ResponseEntity<User> addUser(@RequestBody UserRegisterDTO user){
        //Obtenemos el objeto tipo de usuario "Cliente" y luego creamos el actual usuario nuevo
        UserType currentUserType = utr.getUserTypeByName("cliente");
        User emailComprobation = ur.getUserByEmail(user.getEmail());

        if(emailComprobation != null){
            System.err.println("El correo ya está registrado");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        User currentUser = new User(null, user.getName(),
        user.getEmail().toLowerCase(),user.getPassword(),
        currentUserType,1);

        ur.addUser(currentUser);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("getUserByEmailPassword")
    public ResponseEntity<User> findUserByEmailPassword(@RequestBody UserLoginDTO userLoginDTO){
        User currentUser = ur.getUserByEmail(userLoginDTO.getEmail());

        if(currentUser == null || currentUser.getPassword().compareTo(userLoginDTO.getPassword()) != 0){
            System.err.println("el usuario/contraseña no coinciden");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(currentUser);
    }


}
