import { Component, Inject, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitsService } from '../services/produits.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/categorie';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items = [
    {
      imgSrc: 'assets/images/carouselproduits/cheese-cake.jpg',
      title: 'Cheesecake',
      description: 'Delicious cheesecake with fresh berries.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/mini-cake.jpg',
      title: 'Mini Cake & Lunch Box',
      description: 'Perfect mini cakes for your lunch box.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/ready-cakes.jpg',
      title: 'Ready Cakes',
      description: 'Homemade cakes for all occasions.'
    },
  
    {
      imgSrc: 'assets/images/carouselproduits/decorated-cakes.jpg',
      title: 'Decorated Cakes',
      description: 'Beautifully decorated cakes for special occasions.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/gift-box.jpg',
      title: 'Gift Box',
      description: 'Gift boxes filled with delicious treats.'
    },
    {
      imgSrc: 'assets/images/carouselproduits/cake-pieces.jpg',
      title: 'Cake Pieces',
      description: 'Colorful and delightful cake pieces.'
    }
  ];
  categories:Categorie[]=[];
  categorie:Categorie|undefined;
  idCategorie:any;
  produits:Produit[]=[ ];
  produit:Produit|undefined;
   idProduit:any;
  constructor(private router:Router, 
    private produitService : ProduitsService, 
    private categorieService: CategorieService,
    private panierService: PanierService,
    private route:ActivatedRoute,@Inject('baseURL') 
    public baseURL:any
   ){}
  
  ngOnInit(): void {
    //sans backend 
    //this.produits=this.produitService.getAllProduits();
   this.produitService.getAllProduits().subscribe({
    next:(produits:Produit[])=>{this.produits=produits}
   })
     this.idProduit= this.route.snapshot.params['id'];

     this.categorieService.getAllCategories().subscribe({
      next:(categories:Categorie[])=>{this.categories=categories}
     })
    this.idCategorie= this.route.snapshot.params['id'];
  } 

  addToPanier(produit: Produit) {
    this.panierService.addToPanier(produit);
   
  }
      }

 
  
 
 
  
