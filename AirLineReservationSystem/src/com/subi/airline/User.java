package com.subi.airline;

public class User {

	private String email;
	private String password;
	private String role;
	private String name;
	private String mobile;
	private String nationality;
	private String address;
	
	public User() {}

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public User(String email, String password, String name, String mobile, String nationality, String address,String role) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.mobile = mobile;
		this.nationality = nationality;
		this.address = address;
		this.role = role;

	}

	@Override
	public String toString() {
		return "User [email=" + email + ", password=" + password + ", name=" + name + ", mobile=" + mobile
				+ ", nationality=" + nationality + ", address=" + address + "]";
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
}
