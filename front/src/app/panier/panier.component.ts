import { Component, Inject, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Produit } from '../models/produit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Produit[] = [];

  constructor(private panierService: PanierService,
    private router:Router, 
     private route:ActivatedRoute,
    @Inject('baseURL') public baseURL:any) { }

  ngOnInit(): void {
    this.panier = this.panierService.getPanierItems();
  }

  removeFromPanier(id: number) {
    this.panierService.removeFromPanier(id);
    this.panier = this.panierService.getPanierItems();
  }

  clearPanier() {
    this.panierService.clearPanier();
    this.panier = [];
  }

}
