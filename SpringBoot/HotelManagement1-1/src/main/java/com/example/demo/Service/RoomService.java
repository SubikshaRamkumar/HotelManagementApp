package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.CustRepo;
import com.example.demo.Repo.GuestRepo;
import com.example.demo.Repo.RoomRepo;
import com.example.demo.Entity.RoomAvail;
import com.example.demo.Entity.Cust_details;
import com.example.demo.Entity.GuestInfo;

@Service
public class RoomService {

    @Autowired
    private RoomRepo repor;
    @Autowired
    private GuestRepo repog; 
    @Autowired
    private CustRepo repoc; 
//
    public Cust_details saveCust(Cust_details details) {
        return repoc.save(details);
    }
    public GuestInfo saveGuest(GuestInfo details) {
        return repog.save(details);
    }

    public List<Cust_details> getAllCust() {
        return repoc.findAll();
    }
    public List<Cust_details> getCustByEmaildef(String email) {
        return repoc.findByEmail(email);
    }
    
//    public Rooms saveRooms(Rooms details) {
//        return repo.save(details);
//    }
//
    public List<GuestInfo> getGuestInfoByEmail(String email) {
        return repog.findByEmail(email);
    }
    public GuestInfo UpdateGuest(int id,GuestInfo det)
    {
    	return repog.saveAndFlush(det);
    }
    public Cust_details addReser(Cust_details det)
    {
    	return repoc.save(det);
    }
    public List<RoomAvail> getAllRooms() {
        return repor.findAll();
    }
    
}


//import com.arjuncodes.studentsystem.model.Student;
//import com.arjuncodes.studentsystem.repository.StudentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class StudentServiceImpl implements StudentService {
//
//    @Autowired
//    private StudentRepository studentRepository;
//
//    @Override
//    public Student saveStudent(Student student) {
//        return studentRepository.save(student);
//    }
//
//    @Override
//    public List<Student> getAllStudents() {
//        return studentRepository.findAll();
//    }
//}
