package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Cust_details;
import com.example.demo.Entity.GuestInfo;
import com.example.demo.Entity.RoomAvail;
import com.example.demo.Service.RoomService;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
public class HotelController {

	@Autowired
	private RoomService ser;
	
	@GetMapping("/showAllCust")
	public List<Cust_details> getAllC()
	{
		return ser.getAllCust();
	}
	@GetMapping("/showAllRooms")
	public List<RoomAvail> getAllRoom()
	{
		return ser.getAllRooms();
	}
	@GetMapping("/showCust/{email}")
	public List<Cust_details> getCustByEmail(@PathVariable String email)
	{
		return ser.getCustByEmaildef(email);
	}
	@GetMapping("/showGuest/{email}")
	public List<GuestInfo> getAllr(@PathVariable String email)
	{
		return ser.getGuestInfoByEmail(email);
	}
	
	
	@PostMapping("/addCust")
	public Cust_details addC(@RequestBody Cust_details c)
	{
		return ser.saveCust(c);
	}
	@PostMapping("/addGuest")
	public GuestInfo addG(@RequestBody GuestInfo c)
	{
		return ser.saveGuest(c);
	}
	@PutMapping("/updateGuest/{id}")
	public GuestInfo updateG(@PathVariable int id,@RequestBody GuestInfo det )
	{
		return ser.UpdateGuest(id,det);
	}
	@PostMapping("/addReserv")
	public Cust_details addRes(@RequestBody Cust_details det )
	{
		return ser.addReser(det);
	}
//	@PostMapping("/addRooms")
//	public Rooms addR(@RequestBody Rooms c)
//	{
//		return ser.saveRooms(c);
//	}
	
}
