package com.example.cakedreamstore.business.servicesImpl;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.stream.Collectors;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cakedreamstore.business.services.CommandeService;
import com.example.cakedreamstore.dao.entites.Commande;
<<<<<<< HEAD
import com.example.cakedreamstore.dao.repositories.CommandeRepository;
=======
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.dao.repositories.CommandeRepository;
import com.example.cakedreamstore.dao.repositories.ProduitRepository;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b

import jakarta.persistence.EntityNotFoundException;

@Service
public class CommandeServiceImpl implements CommandeService {

    private final CommandeRepository commandeRepository;
<<<<<<< HEAD

    @Autowired
    public CommandeServiceImpl(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
=======
    private final ProduitRepository produitRepository;

    @Autowired
    public CommandeServiceImpl(CommandeRepository commandeRepository, ProduitRepository produitRepository) {
        this.commandeRepository = commandeRepository;
        this.produitRepository = produitRepository;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
    }

    @Override
    public Commande confirmCommande(Commande commande) {
<<<<<<< HEAD
        // Save the order to the database
=======
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
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
<<<<<<< HEAD
=======

    @Override
    public List<Produit> getProduitById(List<Long> produitIds) {
        return produitRepository.findAllById(produitIds);
    }
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
}
