package com.example.demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.GuestInfo;

@Repository
public interface GuestRepo extends JpaRepository<GuestInfo,Integer> {

	List<GuestInfo> findByEmail(@Param("email")String email);

}
