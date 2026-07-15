package com.comtrack.controller;

import com.comtrack.entity.Commercial;
import com.comtrack.service.CommercialService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/commerciaux")

public class CommercialController {
    private final CommercialService commercialService;

    public  CommercialController(CommercialService commercialService){
        this.commercialService=commercialService;
    }

    @GetMapping
    public List<Commercial> getAllCommercials(){
        return commercialService.getAllCommercials();
    }

    @GetMapping("/{id}")
    public Commercial getCommercial(@PathVariable Long id){
        return commercialService.getCommercialById(id);
    }

    @PostMapping
    public Commercial createCommercial(@RequestBody Commercial commercial){
        return commercialService.createCommercial(commercial);
    }

    @PutMapping("/{id}")
    public Commercial updateCommercial(@PathVariable Long id, @RequestBody Commercial commercial){
        return commercialService.updateCommercial(id,commercial);
    }


    @DeleteMapping("/{id}")
    public void deleteCommercial(@PathVariable Long id){
         commercialService.deleteCommercial(id);
    }
}
