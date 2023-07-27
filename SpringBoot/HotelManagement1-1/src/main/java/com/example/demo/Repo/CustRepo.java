package com.example.demo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Cust_details;

public interface CustRepo extends JpaRepository<Cust_details,Integer>{

	List<Cust_details> findByEmail(String email);
	

}
