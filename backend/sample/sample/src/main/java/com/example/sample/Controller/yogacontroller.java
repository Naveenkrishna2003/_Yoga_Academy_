package com.example.sample.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sample.Entity.yogaentity;
import com.example.sample.Service.yogaservice;


@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping("/addCourseDetails")
class EventController {

    @Autowired
    yogaservice r;
// ---------------------CRUD OPERATION------------------

@PostMapping("/add/course")
public String addDetails(@RequestBody yogaentity m) {
    r.add(m);
    return "Event Added successfully" ;
}

@GetMapping("/get/course")
public List<yogaentity> showDetails() {
    return r.getDetails();

}
// @GetMapping("/get/event/{id}")
// public partyentity showDetail(@PathVariable int id) {
//     return r.getDetail(id);

// }



@PutMapping("/update/course/{id}")
public yogaentity Details(@RequestBody yogaentity newUser ,@PathVariable int id)
{
     return r.updateDetails(newUser,id);
}

@DeleteMapping("/delete/course/{id}")
public String delete(@PathVariable int id )
{
    r.deleteDetails(id);
    return "Event deleted successfully";
}

}