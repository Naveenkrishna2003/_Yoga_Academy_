package com.example.sample.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//To use the @Data annotation you should add the Lombok dependency.

@Entity
// @Table(name="book")
public class yogaentity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String course;
    private String imgurl;
    private String description;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getCourse() {
        return course;
    }
    public void setCourse(String title) {
        this.course = title;
    }
    public String getUrl() {
        return imgurl;
    }
    public void setUrl(String imgurl) {
        this.imgurl = imgurl;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public yogaentity(int id, String course,String imgurl ,String description) {
        this.id = id;
        this.course = course;
        this.imgurl = imgurl;
        this.description = description;
    }
    
    public yogaentity(){

    }
    
   
    
}