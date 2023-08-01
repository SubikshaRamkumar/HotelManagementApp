package com.subi.airline;

import java.util.List;

public interface DaoInterface {

	//createUser
	
	public void createUser(User user);
	
	
	public void addPassengers(Passenger p,String userEmail);

	//update User
	
	public void updateUser(String email,String name,String mobile,String nationality,String address);
	
	//createPassenger
	
	public void createPassenger(Passenger passenger);
	

	public void showUserByEmail(String email);

	public void showFlights();

	public void searchByDestination(String org,String des);
	
	public List<Passenger> getPassengersByUserEmail(String userEmail);


	public void updatePassengerById(int id3, String name2, int age2, String gender2);


	public void deletePassengerById(int id4);


	public void BookFlight(String fid, int passengerCount, String seatclass,String email);


	public void showBooking(String email);


	public void showAllUser();


	public void addFlight(Flight f);


	public void showAllBooking();


	public void deleteFlight(String id);


	
	
	
}
