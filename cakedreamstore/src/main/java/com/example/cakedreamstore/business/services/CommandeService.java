package com.example.cakedreamstore.business.services;

<<<<<<< HEAD
import java.util.List;

import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.entites.Produit;


public interface CommandeService {
   
    Commande confirmCommande(Commande Commande); 
    List<Commande> getAllCommande();
    Commande getCommandeById(Long id) throws Exception;
   
    Commande UpdateStatut(Long id,Commande commande) throws Exception;
   
}
 
=======
import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.entites.Produit;

import java.util.List;

public interface CommandeService {
    Commande confirmCommande(Commande commande);
    List<Commande> getAllCommande();
    Commande getCommandeById(Long id) throws Exception;
    Commande UpdateStatut(Long id, Commande commande) throws Exception;
    List<Produit> getProduitById(List<Long> produitIds);
}
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
