package com.subi.airline;

public class Flight {

	private String flight_num;
	private String from_city;
	private String to_city;
	private String arival_time ;
	private String departure_time ;
	private int travel_duration ;
	private Double economy_fare;
	private Double business_fare;
	private int bcseat;
	private int ecseat;
	public Flight(String flight_num, String from_city, String to_city, String arival_time, String departure_time,
			int travel_duration, Double economy_fare, Double business_fare, int bcseat, int ecseat) {
		super();
		this.flight_num = flight_num;
		this.from_city = from_city;
		this.to_city = to_city;
		this.arival_time = arival_time;
		this.departure_time = departure_time;
		this.travel_duration = travel_duration;
		this.economy_fare = economy_fare;
		this.business_fare = business_fare;
		this.bcseat = bcseat;
		this.ecseat = ecseat;
	}
	public String getFlight_num() {
		return flight_num;
	}
	public void setFlight_num(String flight_num) {
		this.flight_num = flight_num;
	}
	public String getFrom_city() {
		return from_city;
	}
	public void setFrom_city(String from_city) {
		this.from_city = from_city;
	}
	public String getTo_city() {
		return to_city;
	}
	public void setTo_city(String to_city) {
		this.to_city = to_city;
	}
	public String getArival_time() {
		return arival_time;
	}
	public void setArival_time(String arival_time) {
		this.arival_time = arival_time;
	}
	public String getDeparture_time() {
		return departure_time;
	}
	public void setDeparture_time(String departure_time) {
		this.departure_time = departure_time;
	}
	public int getTravel_duration() {
		return travel_duration;
	}
	public void setTravel_duration(int travel_duration) {
		this.travel_duration = travel_duration;
	}
	public Double getEconomy_fare() {
		return economy_fare;
	}
	public void setEconomy_fare(Double economy_fare) {
		this.economy_fare = economy_fare;
	}
	public Double getBusiness_fare() {
		return business_fare;
	}
	public void setBusiness_fare(Double business_fare) {
		this.business_fare = business_fare;
	}
	public int getBcseat() {
		return bcseat;
	}
	public void setBcseat(int bcseat) {
		this.bcseat = bcseat;
	}
	public int getEcseat() {
		return ecseat;
	}
	public void setEcseat(int ecseat) {
		this.ecseat = ecseat;
	}

	public Flight() {}


}
