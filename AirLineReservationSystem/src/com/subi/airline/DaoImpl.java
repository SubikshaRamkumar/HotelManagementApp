package com.subi.airline;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

public class DaoImpl implements DaoInterface {

	Connection con;
	DBConnection DBConnection = new DBConnection();

	@Override
	public void createUser(User user) {

		con = DBConnection.createDBConnection();
		String query = "insert into user values(? ,? ,?,?,?,?,?)";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setString(1, user.getEmail());
			pstm.setString(2, user.getPassword());
			pstm.setString(3, user.getName());
			pstm.setString(4, user.getMobile());
			pstm.setString(5, user.getNationality());
			pstm.setString(6, user.getAddress());
			pstm.setString(7, user.getRole());

			int count = pstm.executeUpdate();

			if (count != 0) {
				System.out.println("Successfully Account created");
			} else {
				System.out.println("Account Not Created");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void updateUser(String email, String name, String mobile, String nationality, String address) {
		con = DBConnection.createDBConnection();
		String query = "update user set name = ? , mobile = ? , nationality = ? , address = ? where email = ? ";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setString(1, name);
			pstm.setString(2, mobile);
			pstm.setString(3, nationality);
			pstm.setString(4, address);
			pstm.setString(5, email);
			int count = pstm.executeUpdate();
			if (count != 0) {
				System.out.println("Updated Successfully");

			} else {
				System.out.println("Not Updated");

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void createPassenger(Passenger passenger) {
		// TODO Auto-generated method stub

	}

	@Override
	public void showUserByEmail(String email) {

		con = DBConnection.createDBConnection();
		String query = "select * from user where email=?";
		try {
			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, email);
			ResultSet result = pstmt.executeQuery();
//			System.out.println("*********************************************************************");
			System.out.format("%s\t\t%s\t%s\t\t%s\t%s\n", "EMAIL", "NAME", "MOBILE", "NATIONALITY", "ADDRESS");
//	    	System.out.println("------------------------------------------------------------------");
			while (result.next()) {
				System.out.format("%s\t%s\t%s\t%s\t\t%s\n", result.getString(1), result.getString(3), result.getLong(4),
						result.getString(5), result.getString(6));
				System.out.println("------------------------------------------------------------------");
//				result.toString();

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void showFlights() {

		con = DBConnection.createDBConnection();
		String query = "select * from flight";
		try {
			Statement stmt = con.createStatement();
			ResultSet result = stmt.executeQuery(query);
			System.out.println("Flight Details");
			System.out.println(
					"************************************************************************************************************************************************************");
			System.out.format("%-8s%-15s%-15s%-15s%-15s%-18s%-14s%-14s%-18s%-18s\n", "NUMBER", "FROM", "TO",
					"ARRIVAL_TIME", "DEPARTURE_TIME", "TRAVEL_DURATION", "ECONOMY_FARE", "BUSINESS_FARE",
					"BC_SEAT_AVAILABILE", "EC_SEAT_AVAILABILE");
			;
			System.out.println(
					"------------------------------------------------------------------------------------------------------------------------------------------------------------");

			while (result.next()) {
				System.out.format("%-8s%-15s%-15s%-15s%-15s%-18s%-14s%-14s%-18s%-18s\n", result.getString(1),
						result.getString(2), result.getString(3), result.getTime(4), result.getTime(5),
						result.getInt(6), result.getDouble(7), result.getDouble(8), result.getInt(9),
						result.getInt(10));
				System.out.println(
						"-------------------------------------------------------------------------------------------------------------------------------------------------------------");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void searchByDestination(String org, String des) {
		con = DBConnection.createDBConnection();
		String query = "select * from flight where to_city LIKE ? and from_city LIKE ?";
		try {
			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, "%" + des + "%");
			pstmt.setString(2, "%" + org + "%");

			ResultSet result = pstmt.executeQuery();
			System.out.println("Flight Details that match the destination");
			System.out.println(
					"*************************************************************************************************************************************************************");
			System.out.format("%-8s%-15s%-15s%-15s%-15s%-18s%-14s%-14s%-18s%-18s\n", "NUMBER", "FROM", "TO",
					"ARRIVAL_TIME", "DEPARTURE_TIME", "TRAVEL_DURATION", "ECONOMY_FARE", "BUSINESS_FARE",
					"BC_SEAT_AVAILABILE", "EC_SEAT_AVAILABILE");
			;
			System.out.println(
					"------------------------------------------------------------------------------------------------------------------------------------------------------------");

			while (result.next()) {
				System.out.format("%-8s%-15s%-15s%-15s%-15s%-18s%-14s%-14s%-18s%-18s\n", result.getString(1),
						result.getString(2), result.getString(3), result.getTime(4), result.getTime(5),
						result.getInt(6), result.getDouble(7), result.getDouble(8), result.getInt(9),
						result.getInt(10));
				System.out.println(
						"------------------------------------------------------------------------------------------------------------------------------------------------------------");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void addPassengers(Passenger p, String userEmail) {
		con = DBConnection.createDBConnection();
		String query = "insert into passenger (name, age, gender,user_email) values(? ,? ,? , ?)";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setString(1, p.getName());
			pstm.setInt(2, p.getAge());
			pstm.setString(3, p.getGender());
			pstm.setString(4, userEmail);

			int count = pstm.executeUpdate();

			if (count != 0) {
				System.out.println("Successfully Added the Passenger");
			} else {
				System.out.println("Passenger not added");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<Passenger> getPassengersByUserEmail(String userEmail) {
		List<Passenger> passengers = new ArrayList<>();

		con = DBConnection.createDBConnection();
		String query = "SELECT p.* " + "FROM passenger p " + "JOIN user u ON p.user_email = u.email "
				+ "WHERE u.email = ?";

		try {
			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, userEmail);
			ResultSet result = pstmt.executeQuery();

			while (result.next()) {
				int id = result.getInt("id");
				String name = result.getString("name");
				int age = result.getInt("age");
				String gender = result.getString("gender");
				String user_email = result.getString(5);

				Passenger passenger = new Passenger(id, name, age, gender, user_email);
				passengers.add(passenger);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return passengers;
	}

	@Override
	public void updatePassengerById(int id3, String name2, int age2, String gender2) {
		con = DBConnection.createDBConnection();
		String query = "update passenger set name = ? , age = ? , gender = ?  where id = ? ";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setString(1, name2);
			pstm.setInt(2, age2);
			pstm.setString(3, gender2);
			pstm.setInt(4, id3);
			int count = pstm.executeUpdate();
			if (count != 0) {
				System.out.println("Updated Successfully");

			} else {
				System.out.println("Not Updated");

			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void deletePassengerById(int id4) {
		con = DBConnection.createDBConnection();
		String query = "delete from passenger where id = ? ";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setInt(1, id4);
			int count = pstm.executeUpdate();
			if (count != 0) {
				System.out.println("Deleted Successfully");

			} else {
				System.out.println("Not Deleted");

			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void BookFlight(String fid, int passengerCount, String seatclass, String email) {

		con = DBConnection.createDBConnection();
		String query = "select * from flight where flight_number = ?";
		String query1 = "insert into book (email,flight_number,from_city,to_city,arival_time,departure_time,travel_duration,passenger_count,seat_class,amount) values(?,?,?,?,?,?,?,?,?,?)";

		try {
			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, fid);
			ResultSet result = pstmt.executeQuery();

			while (result.next()) {
//		                String flight_num = result.getString(1);
				String fromCity = result.getString("from_city");
				String toCity = result.getString("to_city");
				Time at = result.getTime("arival_time");
				Time dt = result.getTime("departure_time");
				int td = result.getInt("travel_duration");
				Double Ef = result.getDouble("Economy_fare");

				Double Bf = result.getDouble("business_fare");
				int bcSeat = result.getInt("BC_seat_available");
				int ecSeat = result.getInt("EC_seat_available");
				try {
					PreparedStatement pstmt1 = con.prepareStatement(query1);
					pstmt1.setString(1, email);

					pstmt1.setString(2, fid);
					pstmt1.setString(3, fromCity);
					pstmt1.setString(4, toCity);
					pstmt1.setTime(5, at);
					pstmt1.setTime(6, dt);
					pstmt1.setInt(7, td);
					pstmt1.setInt(8, passengerCount);
					pstmt1.setString(9, seatclass);
					if (seatclass.equals("Business")) {
						double amount = Bf * passengerCount;
						pstmt1.setDouble(10, amount);
						updateFlight(fid, passengerCount, seatclass, bcSeat);

					} else {
						double amount = Ef * passengerCount;
						pstmt1.setDouble(10, amount);
						updateFlight(fid, passengerCount, seatclass, ecSeat);

					}

					int count = pstmt1.executeUpdate();
					if (count != 0) {
						System.out.println("Booking Successful");
					} else {
						System.out.println("Not Booked");
					}
				} catch (Exception e1) {
					e1.printStackTrace();
				}

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	private void updateFlight(String fid, int passengerCount, String seatclass, int num) {

		con = DBConnection.createDBConnection();
		String query;
		if (seatclass.equals("Business")) {
			query = "update flight set BC_seat_available  = ?  where flight_number = ? ";

		} else {
			query = "update flight set EC_seat_available  = ?  where flight_number = ? ";

		}

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			int avail = num - passengerCount;
			pstm.setInt(1, avail);
			pstm.setString(2, fid);
			pstm.executeUpdate();

//				int count = pstm.executeUpdate();
//				if (count != 0) {
//					System.out.println("Updated Successfully to flight table");
//					
//				} else {
//					System.out.println("Not Updated");
//					
//				}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void showBooking(String email) {
		con = DBConnection.createDBConnection();
		String query = "select * from book where email=?";
		try {
			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, email);
			ResultSet result = pstmt.executeQuery();
			System.out.println(
					"*********************************************************************************************************************************************************************************************************");
			System.out.format("%-15s%-15s%-15s%-15s%-15s%-18s%-18s%-18s%-18s%-18s%-18s\n", "BOOKING_ID", "EMAIL",
					"FLIGHT_NUMBER", "FROM_CITY", "TO_CITY", "ARIVAL_TIME", "DEPARTURE_TIME", "TRAVEL_DURATION",
					"PASSENGER_COUNT", "SEAT_CLASS", "AMOUNT");
			System.out.println(
					"---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
			while (result.next()) {
				System.out.format("%-15s%-15s%-15s%-15s%-15s%-18s%-18s%-18s%-18s%-18s%-18s\n", result.getInt(1),
						result.getString(2), result.getString(3), result.getString(4), result.getString(5),
						result.getTime(6), result.getTime(7), result.getInt(8), result.getInt(9), result.getString(10),
						result.getDouble(11));
				System.out.println(
						"-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
//				result.toString();

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void showAllUser() {
		con = DBConnection.createDBConnection();
		String query = "select * from user where role = 'user'";
		try {
			Statement stmt = con.createStatement();
			ResultSet result = stmt.executeQuery(query);

//			System.out.println("*********************************************************************");
			System.out.format("%s\t\t%s\t%s\t\t%s\t%s\n", "EMAIL", "NAME", "MOBILE", "NATIONALITY", "ADDRESS");
//	    	System.out.println("------------------------------------------------------------------");
			while (result.next()) {
				System.out.format("%s\t%s\t%s\t%s\t\t%s\n", result.getString(1), result.getString(3), result.getLong(4),
						result.getString(5), result.getString(6));
				System.out.println("------------------------------------------------------------------");
//				result.toString();

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void addFlight(Flight f) {
		con = DBConnection.createDBConnection();
		String query = "insert into flight values(? ,? ,?,?,?,?,?,?,?,?)";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setString(1, f.getFlight_num());
			pstm.setString(2, f.getFrom_city());
			pstm.setString(3, f.getTo_city());
			pstm.setString(4, f.getArival_time());
			pstm.setString(5, f.getDeparture_time());
			pstm.setInt(6, f.getTravel_duration());
			pstm.setDouble(7, f.getEconomy_fare());
			pstm.setDouble(8, f.getBusiness_fare());
			pstm.setInt(9, f.getBcseat());
			pstm.setInt(10, f.getEcseat());

			int count = pstm.executeUpdate();

			if (count != 0) {
				System.out.println("Successfully Flight Added");
			} else {
				System.out.println("Flight Not Added");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void showAllBooking() {
		con = DBConnection.createDBConnection();
		String query = "select * from book";
		try {
			Statement stmt = con.createStatement();
			ResultSet result = stmt.executeQuery(query);
			System.out.println("Booking Details");
			System.out.println(
					"************************************************************************************************************************************************************");
			System.out.format("%-8s%-15s%-8s%-15s%-15s%-15s%-15s%-18s%-18s%-14s%-18s\n","ID","EMAIL", "NUMBER", "FROM", "TO",
					"ARRIVAL_TIME", "DEPARTURE_TIME", "TRAVEL_DURATION", "PASSENGER COUNT", "SEAT_CLASS",
					"AMOUNT");
			;
			System.out.println(
					"------------------------------------------------------------------------------------------------------------------------------------------------------------");

			while (result.next()) {
				System.out.format("%-8s%-15s%-8s%-15s%-15s%-15s%-15s%-18s%-18s%-14s%-18s\n",result.getInt(1),result.getString(2), result.getString(3),
						result.getString(4), result.getString(5), result.getTime(6), result.getTime(7),
						result.getInt(8), result.getInt(9), result.getString(10), result.getInt(11));
				System.out.println(
						"-------------------------------------------------------------------------------------------------------------------------------------------------------------");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void deleteFlight(String id) {
		con = DBConnection.createDBConnection();
		String query = "delete from flight where flight_number = ? ";

		try {
			PreparedStatement pstm = con.prepareStatement(query);
			pstm.setString(1, id);
			int count = pstm.executeUpdate();
			if (count != 0) {
				System.out.println("Deleted Successfully");

			} else {
				System.out.println("Not Deleted");

			}
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}

}
