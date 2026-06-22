package com.comtrack.repository;

import com.comtrack.entity.Activite;
import com.comtrack.entity.Type;
import com.comtrack.entity.Statut;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActiviteRepository extends JpaRepository<Activite, Long>{
    List<Activite> findByType(Type type);
    List<Activite> findByStatut(Statut statut);
    List<Activite> findByClientId(Long clientId);


}
