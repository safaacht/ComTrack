package com.comtrack.service;

import com.comtrack.entity.Client;
import com.comtrack.repository.ClientRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Client createClient(Client client) {

        client.setCreatedAt(LocalDateTime.now());

        return clientRepository.save(client);
    }
}
