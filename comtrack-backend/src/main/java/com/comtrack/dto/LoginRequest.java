package com.comtrack.dto;

public class LoginRequest{
    private String email;
    private String password;

    public LoginRequest(){}

    public LoginRequest( String email, String password){
        this.email=email;
        this.password=password
    }

    public setEmail(String email){ this.email=email}
    
    public getEmail(){return email}

    public setPassword(String password){ this.password=password}
    
    public getPassword(){return password}
}