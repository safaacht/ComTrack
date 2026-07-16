package com.comtrack.entity;

import jakarta.persistence.*;
import com.comtrack.entity.Role;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable=false)
    private String nom;

    @Column(nullable=false)
    private String prenom;

    @Column(nullable=false , unique=true)
    private String email;

    @Column(nullable=false)
    private String password;

    @Column(nullable=false)
    @Enumerated(EnumType.STRING)
    private Role role;


    //relatoins
    @OneToOne
    @JoinColumn(name ="commercial_id")
    private Commercial commercial;

    // Constructor
    public User() {
    }

    public User(String nom, String prenom, String email,
                String password, Role role) {

        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // Getters & Setters

    public long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Commercial getCommercial() {
        return commercial;
    }

    public void setCommercial(Commercial commercial) {
        this.commercial = commercial;
    }
}