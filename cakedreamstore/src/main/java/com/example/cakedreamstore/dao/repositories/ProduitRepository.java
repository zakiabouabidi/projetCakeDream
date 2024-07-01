package com.example.cakedreamstore.dao.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.cakedreamstore.dao.entites.Produit;


@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByName(String name);
}
