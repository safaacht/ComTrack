package com.comtrack.repository;

import com.comtrack.entity.Client;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClientRepository
        extends JpaRepository<Client,Long> {

    List<Client> findByCommercialId(Long id);
    Client findBySociete(String Societe);
}
