package com.example.cakedreamstore.business.services;

import java.util.List;

import com.example.cakedreamstore.dao.entites.Produit;


public interface ProduitService {
    //Read opérations
    List<Produit> getAllProduit();
    Produit getProduitById(Long id) throws Exception;
    //create
    Produit addProduit(Produit produit);
    //Update
    Produit updateProduit(Long id,Produit produit)throws Exception;
    //Delete
    void deleteProduitById(Long id);


}