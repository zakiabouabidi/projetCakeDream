package com.example.cakedreamstore.web.controllers;

import com.example.cakedreamstore.business.services.CommandeService;
import com.example.cakedreamstore.dao.entites.Commande;
<<<<<<< HEAD
import com.example.cakedreamstore.web.dto.CommandeSummarryDTO;
import org.springframework.beans.factory.annotation.Autowired;
=======
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.web.dto.CommandeSummarryDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/commandes")
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    public CommandeController(CommandeService commandeService) {
        this.commandeService = commandeService;
    }

<<<<<<< HEAD
    
    @PostMapping("/confirm")
    public ResponseEntity<CommandeSummarryDTO> confirmCommande(@RequestBody CommandeSummarryDTO commandeSummarryDTO) {
        Commande commande = CommandeSummarryDTO.fromCommandeSummarryDTO(commandeSummarryDTO);
        Commande confirmedCommande = commandeService.confirmCommande(commande);
        return ResponseEntity.ok(CommandeSummarryDTO.toCommandeSummarryDTO(confirmedCommande));
    }
    
    @GetMapping
    public ResponseEntity<List<CommandeSummarryDTO>> getAllCommandes() {
        List<Commande> commandes = commandeService.getAllCommande();
        List<CommandeSummarryDTO> commandeSummarryDTOs = commandes.stream()
                .map(CommandeSummarryDTO::toCommandeSummarryDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(commandeSummarryDTOs);
=======
    @PostMapping("/confirm")
    public ResponseEntity<CommandeSummarryDTO> confirmCommande(@RequestBody CommandeSummarryDTO commandeSummarryDTO) {
        List<Produit> produits = commandeService.getProduitById(commandeSummarryDTO.produitIds());
        Commande commande = CommandeSummarryDTO.fromCommandeSummarryDTO(commandeSummarryDTO, produits);
        Commande confirmedCommande = commandeService.confirmCommande(commande);
        return ResponseEntity.ok(CommandeSummarryDTO.toCommandeSummarryDTO(confirmedCommande));
    }

    @GetMapping("")
    public ResponseEntity<List<CommandeSummarryDTO>> getAllCommande() {
        List<CommandeSummarryDTO> commandes = commandeService.getAllCommande()
                .stream()
                .map(CommandeSummarryDTO::toCommandeSummarryDTO)
                .collect(Collectors.toList());
        return new ResponseEntity<>(commandes, HttpStatus.OK);
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommandeSummarryDTO> getCommandeById(@PathVariable Long id) throws Exception {
        Commande commande = commandeService.getCommandeById(id);
        return ResponseEntity.ok(CommandeSummarryDTO.toCommandeSummarryDTO(commande));
    }

    @PutMapping("/{id}")
<<<<<<< HEAD
    public ResponseEntity<CommandeSummarryDTO> updateStatut(@PathVariable Long id, @RequestBody CommandeSummarryDTO commandeSummarryDTO) throws Exception {
        Commande commande = CommandeSummarryDTO.fromCommandeSummarryDTO(commandeSummarryDTO);
=======
    public ResponseEntity<CommandeSummarryDTO> updateStatut(@PathVariable Long id,
            @RequestBody CommandeSummarryDTO commandeSummarryDTO) throws Exception {
        List<Produit> produits = commandeService.getProduitById(commandeSummarryDTO.produitIds());
        Commande commande = CommandeSummarryDTO.fromCommandeSummarryDTO(commandeSummarryDTO, produits);
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
        commande.setId(id);
        Commande updatedCommande = commandeService.UpdateStatut(id, commande);
        return ResponseEntity.ok(CommandeSummarryDTO.toCommandeSummarryDTO(updatedCommande));
    }
}
