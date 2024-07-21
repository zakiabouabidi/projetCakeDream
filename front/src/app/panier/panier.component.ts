import { Component, Inject, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { Produit } from '../shared/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../services/commande.service';
import { Commande } from '../shared/commande';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier: Produit[] = [];

  constructor(
    private panierService: PanierService,
    private router: Router,
    private commandeService: CommandeService,
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
    const confirmDelete = confirm("Êtes-vous sûr de vouloir vider votre panier ?");
    if (confirmDelete) {
      this.panierService.clearPanier();
      this.panier = [];
    }
  }

  getTotalPanier(): number {
    return this.panierService.getTotalPanier();
  }

  confirmCommande() {
    const commande = new Commande(
      this.panier,
      this.getTotalPanier(),
      this.panier.reduce((sum, produit) => sum + produit.quantite, 0),
      'EN_ATTENTE'
    );

    this.commandeService.confirmCommande(commande).subscribe(
      response => {
        console.log('Commande confirmée:', response);
        this.panierService.clearPanier(); // Vider le panier local après confirmation
        this.router.navigate(['/confirmation']); // Rediriger vers la page de confirmation
      },
      error => {
        console.error('Erreur lors de la confirmation de la commande:', error);
      }
    );
  }
}
