package com.example.cakedreamstore.business.services;

import java.util.List;

import com.example.cakedreamstore.dao.entites.Commande;
import com.example.cakedreamstore.dao.entites.Produit;


public interface CommandeService {
   
    Commande confirmCommande(Commande Commande); 
    List<Commande> getAllCommande();
    Commande getCommandeById(Long id) throws Exception;
   
    Commande UpdateStatut(Long id,Commande commande) throws Exception;
   
}
 