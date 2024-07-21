package com.example.cakedreamstore.business.services;



import org.springframework.security.core.Authentication;
import com.example.cakedreamstore.dao.entites.User;
import com.example.cakedreamstore.exceptions.DuplicateUserException;
import com.example.cakedreamstore.web.dto.AuthenticationUserDTO;
public interface AuthenticationService {
   
    User register(User user) throws DuplicateUserException;
   AuthenticationUserDTO login(Authentication authentication);
}
