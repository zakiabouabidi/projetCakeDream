package com.example.cakedreamstore.business.services;

import java.util.List;
import java.util.Optional;

import com.example.cakedreamstore.dao.entites.Categorie;


public interface CategorieService {
 List<Categorie> getAllCategorie();
Categorie getCategorieById(Long id) throws Exception ;
//create
Categorie addCategorie(Categorie categorie);

    //Update
    Categorie updateCategorie(Long id,Categorie categorie)throws Exception;

     //Delete
     void deleteCategorieById(Long id);
}
