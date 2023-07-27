package com.example.demo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
	private String email;
	private String name;
	private String phoneNumber;
	private String city;
	private String location;
	private String state;
	private String password;
	private String postalCode;
    private String country;
}
