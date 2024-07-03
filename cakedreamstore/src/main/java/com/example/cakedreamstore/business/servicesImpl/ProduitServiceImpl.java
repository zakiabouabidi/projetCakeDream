package com.example.cakedreamstore.business.servicesImpl;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.example.cakedreamstore.business.services.FilesStorageService;
import com.example.cakedreamstore.business.services.ProduitService;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.dao.repositories.ProduitRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class ProduitServiceImpl implements ProduitService {

    ProduitRepository produitRepository;
    FilesStorageService filesStorageService;

    public ProduitServiceImpl(ProduitRepository produitRepository,
            FilesStorageService filesStorageService) {
        this.produitRepository = produitRepository;
        this.filesStorageService = filesStorageService;
    }

    @Override
    public List<Produit> getAllProduit() {
       return produitRepository.findAll();
      //  return produitRepository.findAll(Sort.by(Direction.ASC, "categorie"));
    }

    @Override
    public Produit getProduitById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("ID cannot be null");
        }

        return this.produitRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("produit with id: " + id + " not found"));
    }

    @Override
    public Produit addProduit(Produit produit) {
        if (produit == null) {
            return null;
        }
        return this.produitRepository.save(produit);
    }

    @Override
    public Produit updateProduit(Long id, Produit produit) {
        // Vérifier que l'ID et le produit ne sont pas nuls
        if (id == null || produit == null) {
            throw new IllegalArgumentException("ID et produit ne peuvent pas être null");
        }

        // Vérifier si le produit avec l'ID spécifié existe dans la base de données
        Produit existingProduit = getProduitById(id);

        // Mettre à jour les attributs du produit existant avec ceux du produit fourni
       
        existingProduit.setCategorie(produit.getCategorie());
        // Enregistrer les modifications dans la base de données
        return produitRepository.save(existingProduit);
    }

    // @Override
    // public void deleteProduitById(Long id) {
    // if(id==null){
    // return ;
    // }
    // this.produitRepository.deleteById(id);

    // }

    @Override
    @Transactional
    // the deleteProduit method executes all its operations (checking for the
    // produit, deleting the file,
    // and deleting the produit record) within a single transaction.If any part of
    // this process fails,
    // the entire transaction will be rolled back, maintaining data consistency and
    // integrity.
    public void deleteProduitById(Long id) {
        // Check if the ID is null and throw an IllegalArgumentException if it is
        if (id == null) {
            throw new IllegalArgumentException("L'ID  ne peuvent pas être nul");
        }
        try {
            // Retrieve the produit by ID
            Produit produit = this.getProduitById(id);
            // Get the image filename associated with the produit
            String filename = produit.getImage();
            // If the produit has an image, delete it
            if (filename != null) {
                filesStorageService.delete(filename);
            }
            // Delete the produit from the repository by ID
            produitRepository.deleteById(id);
        } catch (DataAccessException e) {
            // Capture any data access exceptions (e.g., foreign key constraint violations)
            throw new RuntimeException("Échec de la suppression du produit avec l'identifiant : " + id, e);
        }
    }

    @Override
    public Produit updateProduitImage(Long id, String filename) {
        // Check if the ID is null and throw an IllegalArgumentException if it is
        if (id == null) {
            throw new IllegalArgumentException("L'ID ne peut pas être null");
        }

        // Retrieve the produit by ID, throw an EntityNotFoundException if the produit
        // is not found
        Produit produit = getProduitById(id);

        // Check if the produit already has an image
        if (produit.getImage() == null) {
            // If the produit does not have an image, set the new image
            produit.setImage(filename);
        } else {
            // If the produit already has an image, delete the old image
            this.filesStorageService.delete(produit.getImage());
            // Set the new image
            produit.setImage(filename);
        }
        // Save and return the updated produit in the repository
        return produitRepository.save(produit);
    }

}
