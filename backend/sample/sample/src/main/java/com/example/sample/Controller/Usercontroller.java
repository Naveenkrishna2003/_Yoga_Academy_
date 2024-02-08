package com.example.sample.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Usercontroller {
    @GetMapping("/hello")
    public String getName(){
        return "Hello";
    }
    @GetMapping("/")
    public String getName1(){
        return "NK";
    }
}

