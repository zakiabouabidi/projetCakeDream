import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private key = 'panier'; // Clé pour le LocalStorage
  private panierSubject = new BehaviorSubject<Produit[]>([]);

  constructor() {
    // Initialisation du BehaviorSubject avec le panier existant
    this.panierSubject.next(this.getPanierItems());
  }

  addToPanier(produit: Produit) {
    let panier: Produit[] = this.getPanierItems();

    // Vérifie si le produit est déjà dans le panier
    let existingProduit = panier.find(p => p.id === produit.id);

    if (existingProduit) {
      // Si le produit existe déjà, augmentez la quantité
      existingProduit.quantite++;
      existingProduit.prixTotal = existingProduit.quantite * existingProduit.prix;
    } else {
      // Sinon, ajoutez le produit au panier avec une quantité initiale de 1
      produit.quantite = 1;
      produit.prixTotal = produit.prix;
      panier.push(produit);
    }

    // Mettez à jour le panier dans le LocalStorage et le BehaviorSubject
    localStorage.setItem(this.key, JSON.stringify(panier));
    this.panierSubject.next(panier);
  }

  getPanierItems(): Produit[] {
    let panierItems = localStorage.getItem(this.key);
    return panierItems ? JSON.parse(panierItems) : [];
  }

  clearPanier() {
    localStorage.removeItem(this.key);
    this.panierSubject.next([]);
  }

  removeFromPanier(id: number) {
    let panier: Produit[] = this.getPanierItems();
    let index = panier.findIndex(p => p.id === id);
    if (index !== -1) {
      panier.splice(index, 1);
      localStorage.setItem(this.key, JSON.stringify(panier));
      this.panierSubject.next(panier);
    }
  }

  getTotalProduits(): number {
    let panier: Produit[] = this.getPanierItems();
    return panier.reduce((total, produit) => total + produit.quantite, 0);
  }

  (): number {
  getTotalPanier  let panier: Produit[] = this.getPanierItems();
    return panier.reduce((total, produit) => total + produit.prixTotal, 0);
  }

  getPanierObservable() {
    return this.panierSubject.asObservable();
  }
}
