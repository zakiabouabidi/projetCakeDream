package com.example.cakedreamstore.business.services;

import java.util.List;
import java.util.Optional;

import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.exception.DuplicateCategorieException;


public interface CategorieService {
    
 List<Categorie> getAllCategorie();
Categorie getCategorieById(Long id) throws Exception ;
//create
Categorie addCategorie(Categorie categorie) throws DuplicateCategorieException;

    //Update
    Categorie updateCategorie(Long id,Categorie categorie)throws  DuplicateCategorieException;

     //Delete
     void deleteCategorieById(Long id);
      Categorie updateCategorieImage (Long id,String filename);

}
