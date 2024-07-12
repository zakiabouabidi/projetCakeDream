package com.example.cakedreamstore.web.dto;

import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.dao.Status;
import lombok.Builder;

import java.util.List;
import java.util.stream.Collectors;

@Builder
public record CommandeSummarryDTO(
    Long id,
    List<Long> produitIds,
    double totalAchat,
    int quantite,
    Status status
) {
    public static CommandeSummarryDTO toCommandeSummarryDTO(Commande commande) {
        List<Long> produitIds = commande.getProduits().stream()
                .map(Produit::getId)
                .collect(Collectors.toList());

        return CommandeSummarryDTO.builder()
            .id(commande.getId())
            .produitIds(produitIds)
            .totalAchat(commande.getTotalAchat())
            .quantite(commande.getQuantite())
            .status(commande.getStatut())
            .build();
    }

    public static Commande fromCommandeSummarryDTO(CommandeSummarryDTO commandeSummarryDTO, List<Produit> produits) {
        Commande commande = new Commande();
        commande.setId(commandeSummarryDTO.id());
        commande.setProduits(produits);
        commande.setTotalAchat(commandeSummarryDTO.totalAchat());
        commande.setQuantite(commandeSummarryDTO.quantite());
        commande.setStatut(commandeSummarryDTO.status());
        return commande;
    }
}
