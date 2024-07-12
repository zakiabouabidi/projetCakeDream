package com.example.cakedreamstore.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cakedreamstore.dao.entites.Commande;

public interface CommandeRepository  extends JpaRepository<Commande, Long> {

}
