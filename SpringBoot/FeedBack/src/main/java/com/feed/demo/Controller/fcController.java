package com.feed.demo.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class fcController {

	@PostMapping("/addFeedback")
	public ResponseEntity<String> addFeedback(@RequestBody FeedbackRequest feedbackRequest){
		boolean feedbackExists = feedbackService.addFeedback(feedbackRequest);
		if(feedbackExists == true)
			return ResponseEntity.status(HttpStatus.CREATED).body("Feedback added!");
		else
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Something went wrong!");
	}
	@GetMapping("/getFeedback")
	public ResponseEntity<List<FeedbackResponse> getFeedback(){
		return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getFeedback());
	}
}
