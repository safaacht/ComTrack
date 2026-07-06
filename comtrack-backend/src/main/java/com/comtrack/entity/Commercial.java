package com.comtrack.entity;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import com.comtrack.entity.Fonction;
import java.util.List;

@Entity
@Table(name="commerciaux")

public class Commercial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable=false)
    private String nom;

    @Column(nullable=false , unique= true)
    private String prenom;

    @Column(nullable=false , unique=true)
    private String phone;

    @Column(nullable=false , unique= true)
    private String email;

    @Column(nullable=false)
    @Enumerated(EnumType.STRING)
    private Fonction fonction;

    //relations
    @OneToMany(mappedBy="commercial")
    private List<Client> clients;

    @OneToOne(mappedBy="commercial")
    private User user;

    //COnstructors
    public Commercial(){}

    public Commercial(String nom, String prenom,
                      String phone, String email,Fonction fonction){

        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.phone = phone;
        this.email = email;
        this.fonction = fonction;
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

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
