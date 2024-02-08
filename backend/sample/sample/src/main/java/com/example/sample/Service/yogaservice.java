package com.example.sample.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sample.Entity.yogaentity;
import com.example.sample.Repository.yogarepo;




@Service
public class yogaservice {

    @Autowired(required=true)
	yogarepo r;
	
	public String add(yogaentity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<yogaentity> getDetails()
	{
		return r.findAll();
	}
	
	public yogaentity updateDetails(yogaentity newUser ,int id) 
	{
		yogaentity up=r.findById(id).get();		
		 up.setCourse(newUser.getCourse());
		 up.setUrl(newUser.getUrl());
		 up.setDescription(newUser.getDescription());
		 
         return r.saveAndFlush(up);
	}
	
   
	
	
	
	
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	// public eventadd getDetail(int id) {
	
	// 	return r.findById(id).get();
	// }


}