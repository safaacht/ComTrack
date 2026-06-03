package com.comtrack.entity;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import com.comtrack.enums.Fonction;

@Entity
public class Commercial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nom;
    private String prenom;
    private String phone;

    @Enumerated(EnumType.STRING)
    private Fonction fonction;

    public Commercial(){}

    public Commercial(String nom, String prenom,
                      String phone, Fonction fonction){

        this.nom = nom;
        this.prenom = prenom;
        this.phone = phone;
        this.fonction = fonction;
    }

    // Getters & Setters

    public Long getId() {
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Fonction getFonction() {
        return fonction;
    }

    public void setFonction(Fonction fonction) {
        this.fonction = fonction;
    }

}
