package com.subi.airline;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection extends Connectionn {

//	static Connection con;


//	public static Connection createDBConnection() {
//		try {
//
//			// load driver class
//
//            Class.forName("com.mysql.cj.jdbc.Driver");
//			
//			// get connection
//			
//			String url = "jdbc:mysql://localhost:3306/Airline";//if got any wrror regarding ssl ..continue as ?useSSL=false
//			String username = "root";
//			String password = "root";
//			con = DriverManager.getConnection(url,username,password);  //go to getConnection and see that it is returning connection
//			
//
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return con;
//	}

	@Override
	public  Connection createDBConnection() {
		try {

			// load driver class

            Class.forName("com.mysql.cj.jdbc.Driver");
			
			// get connection
			
			String url = "jdbc:mysql://localhost:3306/Airline";//if got any wrror regarding ssl ..continue as ?useSSL=false
			String username = "root";
			String password = "root";
			con = DriverManager.getConnection(url,username,password);  //go to getConnection and see that it is returning connection
			

		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;	}
}

