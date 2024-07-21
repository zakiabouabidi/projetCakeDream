package com.example.cakedreamstore.dao.entites;

import jakarta.persistence.*;
<<<<<<< HEAD
=======
import java.util.ArrayList;
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
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
<<<<<<< HEAD
@Table(name = "Commande")
=======
@Table(name = "commande")
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
<<<<<<< HEAD
    private List<Produit> produits;

    private double totalAchat;
    private int quantite;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status statut = Status.EN_ATTENTE;  // Valeur par défaut

}

=======
    @JoinTable(
        name = "commande_produit",
        joinColumns = @JoinColumn(name = "commande_id"),
        inverseJoinColumns = @JoinColumn(name = "produit_id")
    )
    private List<Produit> produits = new ArrayList<>(); // Initialize the list

    private double totalAchat;
    private int quantite;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status statut = Status.EN_ATTENTE;  // Valeur par défaut
}
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
