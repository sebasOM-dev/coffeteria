package com.example.coffeteria.DAO.repository;

import com.example.coffeteria.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTypeRepository extends JpaRepository<UserType,Long> {
    @Query(value = "select * from user_type where name = ?1", nativeQuery = true)
    public UserType getUserTypeByName(String name);
}
