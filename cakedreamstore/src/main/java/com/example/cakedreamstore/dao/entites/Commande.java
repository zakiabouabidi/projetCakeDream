package com.example.cakedreamstore.dao.entites;

import jakarta.persistence.*;
import java.util.List;

import com.example.cakedreamstore.dao.Status;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Commande")
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Produit> produits;

    private double totalAchat;
    private int quantite;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status statut = Status.EN_ATTENTE;  // Valeur par défaut

}

