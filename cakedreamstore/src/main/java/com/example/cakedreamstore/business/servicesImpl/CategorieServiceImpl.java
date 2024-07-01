package com.example.cakedreamstore.business.servicesImpl;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.example.cakedreamstore.business.services.CategorieService;
import com.example.cakedreamstore.business.services.CategorieService;
import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.repositories.CategorieRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class CategorieServiceImpl  implements CategorieService{

  final CategorieRepository categorieRepository;
  public CategorieServiceImpl(CategorieRepository categorieRepository){
     this.categorieRepository=categorieRepository;
  }

  
  @Override
  public List<Categorie> getAllCategorie() {
    return this.categorieRepository.findAll();
  }

  

    @Override
    public Categorie getCategorieById(Long id) {
        // Check if the ID is null and throw an IllegalArgumentException if it is
        if (id == null) {
            throw new IllegalArgumentException("categorie n'existe pas");
        }
        // Retrieve the contact by ID, throw an EntityNotFoundException if not found
        return this.categorieRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id + " not found"));
    }
  @Override
  public Categorie addCategorie(Categorie categorie) {
    if(categorie==null){
      return null;
  }
  return this.categorieRepository.save(categorie);
  }

  
  @Override
  public Categorie updateCategorie(Long id, Categorie categorie) {
      if (id == null || categorie == null) {
          throw new IllegalArgumentException("ID and produit cannot be null");
      }
      Categorie existingCategorie = getCategorieById(id);
  
      existingCategorie.setName_Categorie(categorie.getName_Categorie());
      existingCategorie.setDescription(categorie.getDescription());
  
      return categorieRepository.save(existingCategorie);
  }

  @Override
  public void deleteCategorieById(Long id) {
    if(id==null){
      return ;
  }
    this.categorieRepository.deleteById(id);

  }
    

}
