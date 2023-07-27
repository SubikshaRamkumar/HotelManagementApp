package com.feed.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.feed.demo.Entity.FeedBack;

public interface FeedBackRepo extends JpaRepository<FeedBack,Integer>{

}
