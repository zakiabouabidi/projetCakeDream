package com.example.cakedreamstore.exceptions;


public class DuplicateUserException extends Exception {
    public DuplicateUserException(String message){
        super(message);
    }
}
