package com.example.demo.Entity;

import java.text.SimpleDateFormat;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class RoomAvail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Temporal(TemporalType.DATE)
	private Date date;
	private int AC_Single;
	private int NON_AC_Single;
	private int AC_Double;
	private int Non_AC_Double;
	private int Penthouse;
	private int SuiteRoom;
	private int FmailyRoom;
	
	
	 public String getFormattedDate() {
	        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
	        return dateFormat.format(this.date);
	    }
	
	public RoomAvail(int id, Date date, int aC_Single, int nON_AC_Single, int aC_Double, int non_AC_Double,
			int penthouse, int suiteRoom, int fmailyRoom) {
		super();
		this.id = id;
		this.date = date;
		AC_Single = aC_Single;
		NON_AC_Single = nON_AC_Single;
		AC_Double = aC_Double;
		Non_AC_Double = non_AC_Double;
		Penthouse = penthouse;
		SuiteRoom = suiteRoom;
		FmailyRoom = fmailyRoom;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}



	public int getAC_Single() {
		return AC_Single;
	}



	public void setAC_Single(int aC_Single) {
		AC_Single = aC_Single;
	}



	public int getNON_AC_Single() {
		return NON_AC_Single;
	}



	public void setNON_AC_Single(int nON_AC_Single) {
		NON_AC_Single = nON_AC_Single;
	}



	public int getAC_Double() {
		return AC_Double;
	}



	public void setAC_Double(int aC_Double) {
		AC_Double = aC_Double;
	}



	public int getNon_AC_Double() {
		return Non_AC_Double;
	}



	public void setNon_AC_Double(int non_AC_Double) {
		Non_AC_Double = non_AC_Double;
	}



	public int getPenthouse() {
		return Penthouse;
	}



	public void setPenthouse(int penthouse) {
		Penthouse = penthouse;
	}



	public int getSuiteRoom() {
		return SuiteRoom;
	}



	public void setSuiteRoom(int suiteRoom) {
		SuiteRoom = suiteRoom;
	}



	public int getFmailyRoom() {
		return FmailyRoom;
	}



	public void setFmailyRoom(int fmailyRoom) {
		FmailyRoom = fmailyRoom;
	}



	public RoomAvail() {}
}
