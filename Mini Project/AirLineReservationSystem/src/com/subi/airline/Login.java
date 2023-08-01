package com.subi.airline;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Login {

	public static boolean authenticate(String email, String pass,String role) {
		DBConnection DBConnection = new DBConnection(); //if the createmethod is static this instance creation is not need..but since it is not static it is necessary
		try {

			Connection con = DBConnection.createDBConnection();
			String query = "select * from user where email = ? and password=? and role=?";

			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, email);
			pstmt.setString(2, pass);
			pstmt.setString(3, role);

			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				return true;
			} else {
				return false;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;

	}
}
