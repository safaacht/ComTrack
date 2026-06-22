package com.comtrack.service;

import com.comtrack.entity.Commercial;
import com.comtrack.repository.CommercialRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CommercialService {

    private final CommercialRepository commercialRepository;

    public CommercialService(
            CommercialRepository commercialRepository) {

        this.commercialRepository = commercialRepository;
    }

    public List<Commercial> getAllCommercials() {
        return commercialRepository.findAll();
    }

    public Commercial createCommercial(
            Commercial commercial) {

        return commercialRepository.save(commercial);
    }

    public Commercial getCommercialById(Long id) {

        return commercialRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Commercial non trouvé"));
    }

    public Commercial updateCommercial(Long id, Commercial commercialDetails) {

        Commercial commercial = getCommercialById(id);

        commercial.setNom(commercialDetails.getNom());
        commercial.setPrenom(commercialDetails.getPrenom());
        commercial.setPhone(commercialDetails.getPhone());

        return commercialRepository.save(commercial);
    }

    public void deleteCommercial(Long id) {

        commercialRepository.deleteById(id);
    }
}
