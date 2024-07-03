package com.example.cakedreamstore.dao.entites;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
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
@Table(name = "Produits")

public class Produit {
     @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    
        private Long id;
        @Column( nullable = false,unique = true)
        private String name;
        private double prix;
        private int quantite;
        private String description;
//         @ElementCollection(fetch= FetchType.EAGER)
//     @CollectionTable(
//             name="gout",
//             joinColumns = @JoinColumn(name="gout_id")
//             )
//     @Column(name="produit_gout")
  //  private List<String> gout;
        private String image;
        @ManyToOne()
        @JoinColumn(name="id_categorie") 
        private Categorie categorie;

        
}

