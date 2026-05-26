package com.comtrack.entity;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import java.time.LocalDate;

@Entity
public class Activity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

    private long id ;
    private String description;
    @Enumerated(EnumType.STRING)
    private Type type;

    private LocalDate date;

    @Enumerated(EnumType.STRING)
    private Statut statut;
}
