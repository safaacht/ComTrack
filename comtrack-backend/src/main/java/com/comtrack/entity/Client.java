package com.comtrack.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="clients")

public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable=false , unique=true)
    private String nomContact;

    @Column(nullable=false , unique=true)
    private String email;

    @Column(nullable=false , unique=true)
    private String phone;

    @Column(nullable=false)
    private String societe;

    @Column(nullable=false)
    private LocalDateTime createdAt;


    //relations
    @ManyToOne
    @JoinColumn(name = "commercial_id")
    private Commercial commercial;

    @OneToMany(mappedBy="client")
    private List <Activite> activites;


    // constructors
    public Client() {}

    public Client(String nom, String email, String phone,String societe) {
        this.nomContact = nom;
        this.email = email;
        this.phone = phone;
        this.societe=societe;
        this.createdAt = LocalDateTime.now();
    }

    // getters and setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomContact() {
        return nomContact;
    }

    public void setNomContact(String nomContact) {
        this.nomContact = nomContact;
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

    public Commercial getCommercial(){return commercial;}

    public void setCommercial(Commercial commercial){this.commercial=commercial;}

    public  List<Activite>  getActivite(){return activites;}

    public void setActivite( List<Activite> activites ){this.activites=activites;}
}