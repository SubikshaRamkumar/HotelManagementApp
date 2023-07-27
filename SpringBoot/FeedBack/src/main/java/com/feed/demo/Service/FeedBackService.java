package com.feed.demo.Service;


import org.springframework.stereotype.Service;

import com.feed.demo.Entity.FeedBack;
import com.feed.demo.Repo.FeedBackRepo;

import org.springframework.beans.factory.annotation.Autowired;
@Service
public class FeedBackService {
  @Autowired
  private FeedBackRepo repo;
  
  public FeedBack addFeedback(FeedBack feedback) {
		return repo.save(feedback);
	}
  
}