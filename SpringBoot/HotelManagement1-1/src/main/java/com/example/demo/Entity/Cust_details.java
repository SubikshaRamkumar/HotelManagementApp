package com.example.demo.Entity;
//reservation side
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="Cust_details")
public class Cust_details {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String RoomType;
	private int NumofRoom;
	@Temporal(TemporalType.DATE)
	private Date ADate;
	@Temporal(TemporalType.DATE)
	private Date DDate;
	private String payment_status;
	private String Payment_id;
	private int amount;
	
	public String getPayment_id() {
		return Payment_id;
	}
	public void setPayment_id(String payment_id) {
		Payment_id = payment_id;
	}
	public Cust_details() {
		
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRoomType() {
		return RoomType;
	}
	public void setRoomType(String roomType) {
		RoomType = roomType;
	}
	public Date getADate() {
		return ADate;
	}
	public void setADate(Date aDate) {
		ADate = aDate;
	}
	public Date getDDate() {
		return DDate;
	}
	public void setDDate(Date dDate) {
		DDate = dDate;
	}
	public Cust_details(int id, String name, String email, String roomType, Date aDate, Date dDate,int numofRoom,String payment_id,int amount,String payment_status) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		RoomType = roomType;
		ADate = aDate;
		DDate = dDate;
		NumofRoom = numofRoom;
		
		Payment_id = payment_id;
		this.amount = amount;
		this.payment_status = payment_status;
	}
	public int getNumofRoom() {
		return NumofRoom;
	}
	public void setNumofRoom(int numofRoom) {
		NumofRoom = numofRoom;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
	
	
	
    
	
	
	
}
