package com.springboot.ecommerce.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.ecommerce.model.*;


public interface userRepo extends JpaRepository<  User , String> {

}
