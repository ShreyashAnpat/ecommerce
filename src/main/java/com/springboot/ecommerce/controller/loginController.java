package com.springboot.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.ecommerce.repo.userRepo;


@RestController
public class loginController {

	
	@Autowired
	userRepo repo ;
	
	
	@RequestMapping("/")
	public String getToken() {
		return "Shreyas Anpat";
	}
	
	
	
	
}
