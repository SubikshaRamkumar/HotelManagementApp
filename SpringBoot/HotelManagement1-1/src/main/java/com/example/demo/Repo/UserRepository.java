package com.example.demo.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.GuestInfo;
import com.example.demo.Entity.User;


public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);

//	User saveAndFlush(User det);
    
}
