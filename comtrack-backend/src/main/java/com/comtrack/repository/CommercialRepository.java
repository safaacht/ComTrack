package com.comtrack.repository;

import com.comtrack.entity.Commercial;
import com.comtrack.entity.Fonction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CommercialRepository extends JpaRepository<Commercial,Long>{
    List<Commercial> findByNom(String nom);
    List<Commercial> findByFonction(Fonction fonction);
    Optional<Commercial> findByEmail(String email);
}
