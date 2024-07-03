package com.example.cakedreamstore.web.controllers;

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
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;
import com.example.cakedreamstore.business.services.CategorieService;
import com.example.cakedreamstore.business.services.ProduitService;
import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.exception.DuplicateCategorieException;
import com.example.cakedreamstore.web.dto.CategorieSummaryDTO;
import com.example.cakedreamstore.web.dto.ProduitSummaryDTO;
@RestController

@RequestMapping("/api/categories")

public class CategorieController {

     @Autowired
    ProduitService produitService;
    @Autowired
    CategorieService categorieService;
    public CategorieController(CategorieService categorieService) {
        this.categorieService = categorieService;
    }

     @GetMapping()
    public ResponseEntity<?> getAllCategorie() {
 List<CategorieSummaryDTO> categories = this.categorieService.getAllCategorie()
                .stream()
                .map(CategorieSummaryDTO::toCategorieSummaryDTO)
               .collect(Collectors.toList());     
        return new ResponseEntity<>(categories, HttpStatus.OK);
       
    }
   
         @GetMapping("/{id}")
     public ResponseEntity<?> getCategorieById(@PathVariable Long id) throws Exception {
        CategorieSummaryDTO categorie = CategorieSummaryDTO.toCategorieSummaryDTO(this.categorieService.getCategorieById(id));
        return new ResponseEntity<>(categorie, HttpStatus.OK);
        
    }

    @PostMapping()
    public ResponseEntity<?> addCategorie(@RequestBody CategorieSummaryDTO categorieSummaryDTO) throws  DuplicateCategorieException{
         Categorie categorie = CategorieSummaryDTO.fromCategorieSummaryDTO(categorieSummaryDTO);
        return new ResponseEntity<>(this.categorieService.addCategorie(categorie), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    
   public ResponseEntity<?> updateCategorie(@PathVariable Long id, @RequestBody CategorieSummaryDTO categorieSummaryDTO) throws DuplicateCategorieException {
        Categorie categorie = CategorieSummaryDTO.fromCategorieSummaryDTO(categorieSummaryDTO);
        Categorie SavedCategory =this.categorieService.updateCategorie(id, categorie);
        return new ResponseEntity<>(CategorieSummaryDTO.toCategorieSummaryDTO(SavedCategory), HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
   public ResponseEntity<?> deleteCategorieById(@PathVariable Long id) {
        this.categorieService.deleteCategorieById(id);
        return new ResponseEntity<>( HttpStatus.NO_CONTENT);
    }  
}
