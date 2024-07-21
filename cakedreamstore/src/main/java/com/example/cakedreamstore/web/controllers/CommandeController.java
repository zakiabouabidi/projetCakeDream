package com.example.cakedreamstore.web.controllers;

import com.example.cakedreamstore.business.services.CommandeService;
import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.web.dto.CommandeSummarryDTO;
import org.springframework.beans.factory.annotation.Autowired;
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
    }

    @GetMapping("/{id}")
    public ResponseEntity<CommandeSummarryDTO> getCommandeById(@PathVariable Long id) throws Exception {
        Commande commande = commandeService.getCommandeById(id);
        return ResponseEntity.ok(CommandeSummarryDTO.toCommandeSummarryDTO(commande));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommandeSummarryDTO> updateStatut(@PathVariable Long id, @RequestBody CommandeSummarryDTO commandeSummarryDTO) throws Exception {
        Commande commande = CommandeSummarryDTO.fromCommandeSummarryDTO(commandeSummarryDTO);
        commande.setId(id);
        Commande updatedCommande = commandeService.UpdateStatut(id, commande);
        return ResponseEntity.ok(CommandeSummarryDTO.toCommandeSummarryDTO(updatedCommande));
    }
}
