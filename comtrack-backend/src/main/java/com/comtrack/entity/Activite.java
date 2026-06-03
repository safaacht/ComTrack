package com.comtrack.entity;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import java.time.LocalDate;

@Entity
public class Activite {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

    private long id ;
    private String description;
    @Enumerated(EnumType.STRING)
    private Type type;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private Statut statut;



    @ManyToOne
    @JoinColumn(name="client_id")
    private Client client;


    //construct

    public Activite(){}

    public Activite(String description ,Type type,
                    Statut statut){
        this.description = description;
                this.type=type;
                this.date= LocalDate.now();
                this.statut=statut;

    }

    //getters & setters
    public long getId() { return id; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Type getType() { return type; }
    public void setType(Type type) { this.type = type; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public Statut getStatut() { return statut; }
    public void setStatut(Statut statut) { this.statut = statut; }

    public Client getClient() { return client; }
    public void setClient(Client client) { this.client = client; }


}
