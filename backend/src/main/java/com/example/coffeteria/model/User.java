package com.example.coffeteria.model;

import jakarta.persistence.*;

@Entity
@Table (name = "users")
public class User {
    @Id
    private Long id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String password;
    @ManyToOne
    @Column
    private UserType userTypeId;
    @Column
    private int active;

    public User(Long id, String name, String email, String password, UserType userTypeId, int active) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.userTypeId = userTypeId;
        this.active = active;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getUserTypeId() {
        return userTypeId.getId();
    }

    public void setUserTypeId(Long userTypeId) {
        this.userTypeId.setId(userTypeId);
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }
}
