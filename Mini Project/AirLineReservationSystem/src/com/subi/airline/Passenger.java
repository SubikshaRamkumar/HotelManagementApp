package com.subi.airline;

public class Passenger {

	private int id;
	private String name;
	private int age;
	private String gender;
	private String user_email;
	
	public Passenger() {}

	public Passenger(int id, String name, int age, String gender,String user_email) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.user_email = user_email;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}
	
	
}
