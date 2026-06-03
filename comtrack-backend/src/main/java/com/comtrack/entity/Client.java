package com.comtrack.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String email;

    private String phone;

    private String societe;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "commercial_id")
    private Commercial commercial;


    // constructors
    public Client() {}

    public Client(String nom, String email, String phone,String societe) {
        this.nom = nom;
        this.email = email;
        this.phone = phone;
        this.societe=societe;
        this.createdAt = LocalDateTime.now();
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSociete() {
        return societe;
    }

    public void setSociete(String societe) {
        this.societe = societe;
    }
}