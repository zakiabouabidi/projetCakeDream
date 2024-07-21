package com.example.cakedreamstore.web.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.cakedreamstore.business.services.CategorieService;
import com.example.cakedreamstore.business.services.ProduitService;
import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.web.dto.ProduitSummaryDTO;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/produits")

public class ProduitController {

    @Autowired
    ProduitService produitService;
    @Autowired
    CategorieService categorieService;

    @GetMapping("")
    public ResponseEntity<?> getAllProduit() {
        List<ProduitSummaryDTO> produit = produitService.getAllProduit()
                .stream()
                .map(ProduitSummaryDTO::toProduitSummaryDTO)
                .collect(Collectors.toList());
        return new ResponseEntity<>(produit, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProduitById(@PathVariable Long id) throws Exception {
        ProduitSummaryDTO produit = ProduitSummaryDTO.toProduitSummaryDTO(this.produitService.getProduitById(id));
        return new ResponseEntity<>(produit, HttpStatus.OK);
    }

    @PostMapping()
     public ResponseEntity<?> addProduit(@RequestBody ProduitSummaryDTO produitSummaryDTO) throws Exception {
        Produit produit = ProduitSummaryDTO.fromProduitSummaryDTO(produitSummaryDTO);
        Categorie categorie = categorieService.getCategorieById(produitSummaryDTO.categorieID());
        produit.setCategorie(categorie);
        Produit savedProduct =this.produitService.addProduit( produit);

        return new ResponseEntity<>(ProduitSummaryDTO.toProduitSummaryDTO(savedProduct), HttpStatus.OK);
    }

    @PutMapping("/{id}")

    public ResponseEntity<?> updateProduit(@PathVariable Long id, @RequestBody ProduitSummaryDTO produitSummaryDTO)throws Exception {
        Produit produit = ProduitSummaryDTO.fromProduitSummaryDTO(produitSummaryDTO);
        Categorie categorie = categorieService.getCategorieById(produitSummaryDTO.categorieID());
        produit.setCategorie(categorie);
        Produit savedProduct =this.produitService.updateProduit(id, produit);

        return new ResponseEntity<>(ProduitSummaryDTO.toProduitSummaryDTO(savedProduct), HttpStatus.OK);

    }

    // il faut faire appel à ProduitDto pas a Produit pour eviter l'erreur d'affichage de details de tt categories
    // @PutMapping("/{id}")

    // public ResponseEntity<?> updateProduit(@PathVariable Long id, @RequestBody ProduitSummaryDTO produitSummaryDTO)throws Exception {
    //     Produit produit = ProduitSummaryDTO.fromProduitSummaryDTO(produitSummaryDTO);
    //     Categorie categorie = categorieService.getCategorieById(produitSummaryDTO.categorieID());
    //     produit.setCategorie(categorie);
    //     Produit savedProduct =this.produitService.updateProduit(id, produit);

    //     return new ResponseEntity<>(ProduitSummaryDTO.toProduitSummaryDTO(savedProduct), HttpStatus.OK);

    // }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduitById(@PathVariable Long id) {
        this.produitService.deleteProduitById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
