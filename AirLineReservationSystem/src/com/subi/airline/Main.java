package com.subi.airline;

import java.util.Scanner;

public class Main {

	public static void main(String args[]) {

		Scanner sc = new Scanner(System.in);
		DaoInterface dao = new DaoImpl();

		System.out.println("Airline Reservation Application");

		do {
			System.out.println("1. New User - SignUp \n" + "2. Already have an account - Login\n" + "3. Exit");

			System.out.println("Enter Your Choice : ");
			int choice = sc.nextInt();
			sc.nextLine();

			switch (choice) {
			case 1:

				User u = new User();
				String pass1;
				String pass2;

				// getting data from user
				System.out.println("SignUp");

				System.out.println("Enter email : ");
				String email = sc.nextLine();
				System.out.println("Enter role [Admin/user]: ");
				String role = sc.nextLine();
				do {

					System.out.println("Enter password : ");
					pass1 = sc.nextLine();
					System.out.println("Enter confirm password : ");
					pass2 = sc.nextLine();

					if (!pass1.equals(pass2)) {
						System.out.println("Password and Confirm Password not matches");
					} else if (pass1.equals("") || pass2.equals("")) {
						System.out.println("Empty password. Provide valid password");

					}
				} while (!pass1.equals(pass2) || pass1.length() == 0 || pass2.length() == 0);

				System.out.println("Password and Confirm Password matched");

				u.setEmail(email);
				u.setPassword(pass2);
				u.setRole(role);
				dao.createUser(u);
				if (role.equals("Admin")) {
					Admin.AdminPage();
				} else {
					MainPage.home(email);
				}
				break;

			case 2:
				String email1;
				String pass;

				String validate = "false";
				// getting data from user
				System.out.println("Login");
				int count = 0;
				System.out.println("Enter role [Admin/user]: ");
				String role1 = sc.nextLine();
				do {
					count++;
					System.out.println("Enter email : ");
					email1 = sc.nextLine();

					System.out.println("Enter password : ");
					pass = sc.nextLine();

					if (Login.authenticate(email1, pass,role1)) {
						validate = "true";
						System.out.println("Login Successfull");

					} else if (count > 5) {
						System.out.println("Entered wrong password many times.Try again after some time");
						System.exit(0);
					} else {

						System.out.println("No user is associated with the given email and password");
					}
				} while (validate.equals("false"));

				if (validate.equals("true")) {
					if (role1.equals("Admin")) {
						Admin.AdminPage();
					} else {
						MainPage.home(email1);
					}
					break;
				}
				break;
			case 3:
				System.out.println("Thank you for using our application");
				System.exit(0);
			default:
				System.out.println("ENTER VALID CHOICE");
				break;
			}
		} while (true);
	}
}
