import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { PanierService } from './services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  totalProduitsPanier: number = 0;

  // Injecting AuthService and Router into the component
  constructor(private authService: AuthService, private router:Router,private panierService: PanierService) { }

  // Initialization logic
  ngOnInit(): void {
    this.panierService.getPanierObservable().subscribe(panier => {
      this.totalProduitsPanier = this.panierService.getTotalProduits();
    });
   
  }

  // Sign out logic
  onSignOut() {
  }
}