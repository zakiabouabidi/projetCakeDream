import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../shared/produit';
import { ProduitsService } from '../services/produits.service';
import { Categorie } from '../shared/categorie';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
 
  produits!:Produit[];
  produit:Produit|undefined;
   idProduit:any;
   errMsg!:string;
   isWaiting:boolean=true;
   isWaitingDelete: boolean = false;
  constructor(private router:Router, 
    private produitService : ProduitsService,
    private panierService: PanierService,
    private route:ActivatedRoute,@Inject('baseURL') public baseURL:any
   ){}
  
  ngOnInit(): void {
    //sans backend 
    //this.produits=this.produitService.getAllProduits();
   this.produitService.getAllProduits().subscribe({
    next:(produits:Produit[])=>{this.produits=produits;this.isWaiting=false; this.errMsg=""},
     error:(err)=>{this.produits=[],this.isWaiting=false,this.errMsg=err}
   })
     //this.idProduit= this.route.snapshot.params['id']
      }

  delateProduit(id:number){
    this.isWaitingDelete = true
   this.produitService.delateProduit(id).subscribe(
    {
      next:(res:any)=>
        { this.isWaitingDelete = false
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

  confirmDelete(id: number): void {
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");

    if (confirmDelete) {
      this.delateProduit(id);
    }
  }
  onCategorie(){
    this.router.navigate(['/categories',{name:'cake fraise'}]);
    //ou
   // this.router.navigateByUrl('/categories?name=cake')
   //pour url externe 
   //window.location.href='https://www.google.com';
  }
 

}
