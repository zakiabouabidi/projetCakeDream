package com.example.cakedreamstore.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cakedreamstore.dao.entites.Categorie;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie,Long> {

}
