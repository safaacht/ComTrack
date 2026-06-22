package com.comtrack.controller;

import com.comtrack.entity.Activite;
import com.comtrack.service.ActiviteService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/activites")

public class ActiviteController {
    private final ActiviteService activiteService;

    public ActiviteController(ActiviteService activiteService){
        this.activiteService=activiteService;
    }

    @GetMapping
    public List<Activite> getAllActivities(){
        return activiteService.getAllActivities();
    }

    @GetMapping("/client/{clientId}")
    public List<Activite> getActivitiesByClient(@PathVariable Long clientId) {
        return activiteService.getActivitiesByClient(clientId);
    }

    @PostMapping
    public Activite createActivite(@RequestBody Activite activite){
        return activiteService.createActivity(activite);
    }

    @DeleteMapping("/{id}")
    public void deleteActivite( @PathVariable Long id){
         activiteService.deleteActivity(id);
    }

    @PutMapping("/{id}")
    public Activite updateActivity(
            @PathVariable Long id,
            @RequestBody Activite activite) {


        return activiteService.updateActivity(id, activite);
    }
}
