import { Component, OnInit } from '@angular/core';
import { PanierService } from './services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Cake Dream';
  totalProduitsPanier: number = 0;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    // Souscrire aux changements dans le panier pour mettre à jour le nombre de produits affiché
    this.panierService.getPanierObservable().subscribe(panier => {
      this.totalProduitsPanier = this.panierService.getTotalProduits();
    });
  }
 
}
