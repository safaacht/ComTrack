package com.comtrack.controller;

import com.comtrack.entity.Client;
import com.comtrack.service.ClientService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService){
        this.clientService=clientService;
    }

    @GetMapping
    public List<Client> getAllClients(){
        return clientService.getAllClients();
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable Long id){
        return clientService.getClientById(id);
    }

    @PostMapping
    public Client createClient(@RequestBody Client client){
        return clientService.createClient(client);
    }

    @PutMapping("/{id}")
    public Client updateClient(@PathVariable Long id, @RequestBody Client client){
        return clientService.updateClient(id,client);
    }

    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable Long id ){
         clientService.deleteClient(id);
    }

}
