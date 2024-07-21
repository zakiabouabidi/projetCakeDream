package com.example.cakedreamstore.web.dto;

import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.dao.Status;
import lombok.Builder;
<<<<<<< HEAD
import java.util.List;
=======

import java.util.List;
import java.util.stream.Collectors;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b

@Builder
public record CommandeSummarryDTO(
    Long id,
<<<<<<< HEAD
    List<Produit> produits,
=======
    List<Long> produitIds,
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
    double totalAchat,
    int quantite,
    Status status
) {
    public static CommandeSummarryDTO toCommandeSummarryDTO(Commande commande) {
<<<<<<< HEAD
        return CommandeSummarryDTO.builder()
            .id(commande.getId())
            .produits(commande.getProduits())
=======
        List<Long> produitIds = commande.getProduits().stream()
                .map(Produit::getId)
                .collect(Collectors.toList());

        return CommandeSummarryDTO.builder()
            .id(commande.getId())
            .produitIds(produitIds)
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
            .totalAchat(commande.getTotalAchat())
            .quantite(commande.getQuantite())
            .status(commande.getStatut())
            .build();
    }

<<<<<<< HEAD
    public static Commande fromCommandeSummarryDTO(CommandeSummarryDTO commandeSummarryDTO) {
        return Commande.builder()
            .id(commandeSummarryDTO.id())
            .produits(commandeSummarryDTO.produits())
            .totalAchat(commandeSummarryDTO.totalAchat())
            .quantite(commandeSummarryDTO.quantite())
            .statut(commandeSummarryDTO.status())
            .build();
=======
    public static Commande fromCommandeSummarryDTO(CommandeSummarryDTO commandeSummarryDTO, List<Produit> produits) {
        Commande commande = new Commande();
        commande.setId(commandeSummarryDTO.id());
        commande.setProduits(produits);
        commande.setTotalAchat(commandeSummarryDTO.totalAchat());
        commande.setQuantite(commandeSummarryDTO.quantite());
        commande.setStatut(commandeSummarryDTO.status());
        return commande;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
    }
}
