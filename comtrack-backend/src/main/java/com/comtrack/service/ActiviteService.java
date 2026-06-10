package com.comtrack.service;

import com.comtrack.entity.Activite;
import com.comtrack.repository.ActiviteRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDate ;
import java.util.List;

@Service
public class ActiviteService {

    private final ActiviteRepository activiteRepository;

    public ActiviteService(ActiviteRepository activiteRepository) {
        this.activiteRepository = activiteRepository;
    }

    public List<Activite> getAllActivities() {
        return activiteRepository.findAll();
    }

    public Activite createActivity(Activite activite) {

        activite.setDate(LocalDate.now());

        return activiteRepository.save(activite);
    }

    public void deleteActivity(long id) {
        activiteRepository.deleteById(id);
    }

    public List<Activite> getActivitiesByClient(Long clientId) {
        return activiteRepository.findByClientId(clientId);
    }

    public Activite updateActivity(Long id, Activite updatedActivity) {

        Activite existing = activiteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activite introuvable"));

        existing.setType(updatedActivity.getType());
        existing.setDescription(updatedActivity.getDescription());
        existing.setStatut(updatedActivity.getStatut());
        existing.setClient(updatedActivity.getClient());

        return activiteRepository.save(existing);
    }

}
