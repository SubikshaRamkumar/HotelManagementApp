package com.subi.airline;

import java.util.List;
import java.util.Scanner;

public class MainPage {

	static String blueColorCode = "\u001B[34m";
	static String greenColorCode = "\u001B[32m";
	static String resetColorCode = "\u001B[0m";
	static String cyanColorCode = "\u001B[36m";
	static String purleColorCode = "\u001B[35m";
//	static String brightredColorCode = "\u001B[91m";
//	static String brightredColorCode = "\u001B[91m";
//	static String brightredColorCode = "\u001B[91m";
//	static String brightredColorCode = "\u001B[91m";
//	static String brightredColorCode = "\u001B[91m";
//	static String brightredColorCode = "\u001B[91m";


	static Scanner sc = new Scanner(System.in);
	static DaoInterface dao = new DaoImpl();

	
	public static void home(String email) {
		do {

			System.out.println(cyanColorCode+"Choose The Following Options according to requirements"+resetColorCode);
			System.out.println("1. Update Profile");
			System.out.println("2. Show Profile");
			System.out.println("3. List Of Flights");
			System.out.println("4. Search Flights By Origin and Destination");
			System.out.println("5. Add Passenger");
			System.out.println("6. Show Passenger");
			System.out.println("7. Update Passenger");
			System.out.println("8. Delete Passengers");
			System.out.println("9. Book Flight");
			System.out.println("10. Show Booking");
			System.out.println("11. Exit");
			
	
            


			System.out.print("Enter choice : ");
			int choice = sc.nextInt();
			sc.nextLine();
			switch (choice) {
			case 1:
				System.out.print("Enter name : ");
				String name = sc.nextLine();
				System.out.print("Enter mobile number : ");
				String mobile = sc.nextLine();
				System.out.print("Enter Nationality : ");
				String nationality = sc.nextLine();
				System.out.print("Enter Address : ");
				String address = sc.nextLine();
				dao.updateUser(email, name, mobile, nationality, address);
				break;
			case 2:
				try {
					dao.showUserByEmail(email);
				} catch (Exception e) {
					e.printStackTrace();
				}
				break;
			case 3:
				dao.showFlights();
				break;
			case 4:
				System.out.print("Enter origin : ");

				String org = sc.nextLine();

				System.out.print("Enter destination : ");

				String des = sc.nextLine();

				dao.searchByDestination(org, des);
				break;
			case 5:
				Passenger p = new Passenger();
				System.out.print("Enter Passenger name :");
				String namep = sc.nextLine();
				System.out.print("Enter Passenger age :");
				int age = sc.nextInt();
				sc.nextLine();
				System.out.print("Enter Passenger gender :");
				String gender = sc.nextLine();
				p.setAge(age);
				p.setGender(gender);
				p.setName(namep);
				dao.addPassengers(p, email);
				break;
			case 6:
				List<Passenger> passenger = dao.getPassengersByUserEmail(email);
				System.out.println(cyanColorCode + "Passenger Details");
				System.out.println(
						"***********************************************************************");
				System.out.format("%-8s%-15s%-15s%-15s%-15s\n", "ID", "NAME", "AGE", "GENDER", "USER_EMAIL");
				System.out.println(
						"-----------------------------------------------------------------------");

				for (Passenger p1 : passenger) {

					System.out.format("%-8d%-15s%-15d%-15s%-15s\n", p1.getId(), p1.getName(), p1.getAge(),
							p1.getGender(), p1.getUser_email());
					System.out.println(
							"-----------------------------------------------------------------------");

				}
                System.out.println(resetColorCode);
				break;

			case 7:
				System.out.print("Enter the id of the Passenger to update :");
				int id3 = sc.nextInt();
				sc.nextLine();
				System.out.print("Enter name of the Passenger :");
				String name2 = sc.nextLine();
				System.out.print("Enter age of the Passenger :");
				int age2 = sc.nextInt();
				sc.nextLine();
				System.out.print("Enter gender of the Passenger :");
				String gender2 = sc.nextLine();
				dao.updatePassengerById(id3, name2, age2, gender2);
				break;
			case 8:
				System.out.println("Enter the id of the Passenger to delete :");
				int id4 = sc.nextInt();
				sc.nextLine();
				dao.deletePassengerById(id4);
				break;
			case 9:
				System.out.println("Reservation");
				System.out.print("Enter the FlightNumber :");
				String fid = sc.nextLine();
				System.out.print("Enter the Class :");
				String Seatclass = sc.nextLine();
				System.out.print("Enter the number of passenger :");
				int passengerCount = sc.nextInt();
				sc.nextLine();
			    dao.BookFlight(fid,passengerCount,Seatclass,email);
				break;
				
			case 10:
				System.out.println("Booking Details");
				dao.showBooking(email);
				break;

			case 11:
				System.out.println("Thank you for using our application");
				System.exit(0);
			default:
				System.out.println("ENTER VALID CHOICE");
				break;
			}
		} while (true);

	}
}
