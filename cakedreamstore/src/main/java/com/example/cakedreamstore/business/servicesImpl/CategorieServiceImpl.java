package com.example.cakedreamstore.business.servicesImpl;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.example.cakedreamstore.business.services.CategorieService;
import com.example.cakedreamstore.business.services.FilesStorageService;
import com.example.cakedreamstore.business.services.CategorieService;
import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.entites.Categorie;
import com.example.cakedreamstore.dao.repositories.CategorieRepository;
import com.example.cakedreamstore.exception.DuplicateCategorieException;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class CategorieServiceImpl  implements CategorieService{

  final CategorieRepository categorieRepository;
   final FilesStorageService filesStorageService;
  public CategorieServiceImpl(CategorieRepository categorieRepository, 
  FilesStorageService filesStorageService){
     this.categorieRepository=categorieRepository;
     this.filesStorageService = filesStorageService;
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
  public Categorie addCategorie(Categorie categorie) throws DuplicateCategorieException{
    if(categorie==null){
      throw new IllegalArgumentException("L'ID  ne peuvent pas être nul");
     
  }try{
  return this.categorieRepository.save(categorie);
  }catch(DataIntegrityViolationException e){
    throw new DuplicateCategorieException(
      "cette categorie est deja existe" );
  }

}

  
  @Override
  public Categorie updateCategorie(Long id, Categorie categorie) throws DuplicateCategorieException{
      if (id == null || categorie == null) {
          throw new IllegalArgumentException("L'ID et le produit ne peuvent pas être null");
      }
   getCategorieById(id);
  try{
    return categorieRepository.save(categorie);
  }catch(DataIntegrityViolationException e){
    throw new DuplicateCategorieException(
      "cette produit est deja existe" );
  }}

  @Override
  public void deleteCategorieById(Long id) {
    if(id==null){
      return ;
  }
    this.categorieRepository.deleteById(id);

  }


  @Override
  public Categorie updateCategorieImage(Long id, String filename) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'updateCategorieImage'");
  }
    

}
