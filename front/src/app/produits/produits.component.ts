import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitsService } from '../services/produits.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
 
  produits:Produit[]=[ ];
  produit:Produit|undefined;
   idProduit:any;
  constructor(private router:Router, 
    private produitService : ProduitsService,
    private route:ActivatedRoute,@Inject('baseURL') public baseURL:any
   ){}
  
  ngOnInit(): void {
    //sans backend 
    //this.produits=this.produitService.getAllProduits();
   this.produitService.getAllProduits().subscribe({
    next:(produits:Produit[])=>{this.produits=produits}
   })
     this.idProduit= this.route.snapshot.params['id'];
      }

  delateProduit(id:number){
   this.produitService.delateProduit(id).subscribe(
    {
      next:(res:any)=>
        {
          let index=this.produits.findIndex(produit=>produit.id===id);
          if(index !=-1){
            this.produits.splice(index,1);
          }
        }
    } );
  }
  onAddProduit() {
    this.router.navigateByUrl('/produits/edit/-1')
  }

 
  onCategorie(){
    this.router.navigate(['/categories',{name:'cake fraise'}]);
    //ou
   // this.router.navigateByUrl('/categories?name=cake')
   //pour url externe 
   //window.location.href='https://www.google.com';
  }
 

}
