package com.example.cakedreamstore.web.dto;

import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.dao.Status;
import lombok.Builder;
import java.util.List;

@Builder
public record CommandeSummarryDTO(
    Long id,
    List<Produit> produits,
    double totalAchat,
    int quantite,
    Status status
) {
    public static CommandeSummarryDTO toCommandeSummarryDTO(Commande commande) {
        return CommandeSummarryDTO.builder()
            .id(commande.getId())
            .produits(commande.getProduits())
            .totalAchat(commande.getTotalAchat())
            .quantite(commande.getQuantite())
            .status(commande.getStatut())
            .build();
    }

    public static Commande fromCommandeSummarryDTO(CommandeSummarryDTO commandeSummarryDTO) {
        return Commande.builder()
            .id(commandeSummarryDTO.id())
            .produits(commandeSummarryDTO.produits())
            .totalAchat(commandeSummarryDTO.totalAchat())
            .quantite(commandeSummarryDTO.quantite())
            .statut(commandeSummarryDTO.status())
            .build();
    }
}
