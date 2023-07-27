package com.feed.demo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feed.demo.Entity.FeedBack;
import com.feed.demo.Service.FeedBackService;


@RestController
@RequestMapping("/feedback")
@CrossOrigin("*")
public class HotelController {

	
	@Autowired
	private FeedBackService fservice;
	
	@PostMapping("/addf")
	public FeedBack AddFeedback(@RequestBody FeedBack feedback) {
		return fservice.addFeedback(feedback);
	}
}