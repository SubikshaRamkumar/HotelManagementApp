package com.subi.airline;

import java.util.Scanner;

public class Admin {
	static Scanner sc = new Scanner(System.in);
	static DaoInterface dao = new DaoImpl();

	public static void AdminPage() {
		boolean c = true;
		System.out.println("Welcome Admin");
		do {
			System.out.println(
					"1. Show User\n" +"2. Show Flights\n"+ "3. Add Flight\n" + "4. Delete Flight\n" + "5. Show All Bookings\n" + "6. Exit");
			System.out.print("Enter Choice : ");
			int choice = sc.nextInt();
			sc.nextLine();
			switch (choice) {
			case 1:
				dao.showAllUser();
				break;
			case 2:
				dao.showFlights();
				break;
			case 3:
				Flight f = new Flight();
				System.out.println("Enter flight number : ");
				String n = sc.nextLine();
				f.setFlight_num(n);
				System.out.println("Enter origin : ");
				String origin = sc.nextLine();
				f.setFrom_city(origin);
				System.out.println("Enter destination : ");
				String des = sc.nextLine();
				f.setTo_city(des);
				System.out.println("Enter arival time : ");
				String at = sc.nextLine();
				f.setArival_time(at);
				System.out.println("Enter departure time : ");
				String dt = sc.nextLine();
				f.setDeparture_time(dt);
				System.out.println("Enter travel duration : ");
				int t = sc.nextInt();
				sc.nextLine();
				f.setTravel_duration(t);

				System.out.println("Enter Economy Fare : ");
				Double ef = sc.nextDouble();
				f.setEconomy_fare(ef);
				System.out.println("Enter Business Fare : ");
				Double bf = sc.nextDouble();
				f.setBusiness_fare(bf);

				System.out.println("Enter Seat availability for Business Class : ");
				int bseat = sc.nextInt();
				sc.nextLine();

				f.setBcseat(bseat);
				System.out.println("Enter Seat availability for Economy Class  : ");
				int eseat = sc.nextInt();
				sc.nextLine();

				f.setEcseat(eseat);
				dao.addFlight(f);
				break;
			case 4:
				System.out.println("Enter flight number to delete flight : ");
				String id = sc.nextLine();
				dao.deleteFlight(id);
				break;
			case 5:
				dao.showAllBooking();
				break;
			case 6 :
				System.out.println("Thank You");
				System.exit(0);
			default : 
				System.out.println("Enter valid choice");
//				c=false;
				break;
			}
		} while (c==true);
	}
}
