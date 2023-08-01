package com.subi.airline;

import java.sql.Connection;

public abstract class Connectionn {
	
	protected 	Connection con;

	 public abstract Connection createDBConnection();

}
