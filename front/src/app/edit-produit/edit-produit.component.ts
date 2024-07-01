import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from '../services/produits.service';
import { NgForm } from '@angular/forms';
import { Produit } from '../models/produit';
import { from } from 'rxjs';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/categorie';


@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit{
  
  categories: Categorie[] = [];
  produit!:Produit;
  constructor(private router:Router,private route:ActivatedRoute, private produiService:ProduitsService, private categorieService:CategorieService){}
  
  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe({
      next:(categories:Categorie[])=>{this.categories=categories}
     })

     this.route.paramMap.subscribe(
      (result)=>{
        let id=result.get('id')
        //update
        if(id!="-1")this.initProduit(id);
        else this.produit=new Produit(null, "", null, null,null,"","images/not-found.jpg","")
      }
    )
  }

  // onSubmit(form:NgForm){
  //   //console.log(form.value)
  //   let produit:Produit={
  //     id:-1,
  //     //name:form.value['name']
  //     //ou
  //     name:form.value.name,
  //     prix:form.value.prix,
  //     quantite:form.value.quantite,
  //     description:form.value.description,
  //     image:'images/not-found.jpg',
  //     categorieID:form.value.categorieID,
  //     categorienamme:form.value.categorienamme,
  //    }
     
  //    console.log(produit)
  //   this.produiService.addonAddProduit(produit).subscribe({
  //     next:(produit)=>{this.router.navigateByUrl("/produits/"+produit.id) },
  //     error:(error)=>{console.log("error")},
  //     complete: ()=>console.log("fin")
  //   });
    
  // }

  initProduit(id:any){
    this.produiService.getProduitById(id).subscribe({
      next:(produit)=>this.produit=produit,
      error:(err)=>console.log("error")
    })
  }


  onSubmit(){
      //ajout
      if(this.produit.id==null){
        this.produit.categorieID = this.produit.categorieID; // Assurez-vous que c'est bien un nombre si nécessaire

         this.produiService.addonAddProduit(this.produit).subscribe({
        next:(produit)=>{this.router.navigateByUrl("/produits/"+produit.id) },
        error:(error)=>{console.log("error")},
        complete: ()=>console.log("fin")
      });
      
      //modif
    }else{
      this.produiService.updateProduit(this.produit).subscribe({
        next:(produit)=>{this.router.navigateByUrl("/produits/"+produit.id) },
        error:(error)=>{console.log("error")},
        complete: ()=>console.log("fin")
      });
    }
      }

     
  onCategorie(){
    this.router.navigateByUrl('/produits')
  }

}


