package com.example.cakedreamstore.business.servicesImpl;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.cakedreamstore.business.services.ProduitService;
import com.example.cakedreamstore.dao.entites.Produit;
import com.example.cakedreamstore.dao.repositories.ProduitRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ProduitServiceImpl  implements ProduitService{

  ProduitRepository produitRepository;
  public ProduitServiceImpl(ProduitRepository produitRepository){
     this.produitRepository=produitRepository;
  }


  

  @Override
  public List<Produit> getAllProduit() {
    return produitRepository.findAll();
  }


  @Override
  public Produit getProduitById(Long id) {
    if (id == null) {
      throw new IllegalArgumentException("ID cannot be null");
  }

  return this.produitRepository.findById(id)
          .orElseThrow(() -> new EntityNotFoundException("Contact with id: " + id + " not found"));
  }

  @Override
  public Produit addProduit(Produit produit) {
    if(produit==null){
      return null;
  }
  return this.produitRepository.save(produit);
  }

  @Override
  public Produit updateProduit(Long id, Produit produit) {
      // Vérifier que l'ID et le produit ne sont pas nuls
      if (id == null || produit == null) {
          throw new IllegalArgumentException("ID and produit cannot be null");
      }
  
      // Vérifier si le produit avec l'ID spécifié existe dans la base de données
      Produit existingProduit = getProduitById(id);
  
      // Mettre à jour les attributs du produit existant avec ceux du produit fourni
      existingProduit.setName(produit.getName());
      existingProduit.setPrix(produit.getPrix());
      existingProduit.setQuantite(produit.getQuantite());
      existingProduit.setDescription(produit.getDescription());
      existingProduit.setImage(produit.getImage());
      existingProduit.setCategorie(produit.getCategorie());
  
      // Enregistrer les modifications dans la base de données
      return produitRepository.save(existingProduit);
  }
  


  



  

  @Override
  public void deleteProduitById(Long id) {
    if(id==null){
      return ;
  }
    this.produitRepository.deleteById(id);

  }

    
  

}
