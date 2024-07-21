package com.example.cakedreamstore.business.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cakedreamstore.business.services.CommandeService;
import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.repositories.CommandeRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;

    @Autowired
    public CommandeServiceImpl(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }

    @Override
    public Commande confirmCommande(Commande commande) {
        // Save the order to the database
        return commandeRepository.save(commande);
    }

    @Override
    public List<Commande> getAllCommande() {
        return commandeRepository.findAll();
    }

    @Override
    public Commande getCommandeById(Long id) throws Exception {
        if (id == null) {
            throw new IllegalArgumentException("ID cannot be null");
        }

        return this.commandeRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Commande with id: " + id + " not found"));
    }

    @Override
    public Commande UpdateStatut(Long id, Commande commande) throws Exception {
        if (id == null || commande == null) {
            throw new IllegalArgumentException("ID and Commande cannot be null");
        }

        getCommandeById(id); // Ensure the commande exists

        commande.setId(id); // Set the correct ID
        return commandeRepository.save(commande);
    }
}
