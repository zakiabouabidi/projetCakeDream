<<<<<<< HEAD
import { Component } from '@angular/core';

=======
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../services/panier.service';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent {
<<<<<<< HEAD

}
=======
  commandes!:Commande[];
  commande:Commande|undefined;
   idCommande:any;
   errMsg!:string;
   isWaiting:boolean=true;
   isWaitingDelete: boolean = false;
  constructor(private router:Router, 
    private commandeService : CommandeService 
,
    private route:ActivatedRoute,@Inject('baseURL') public baseURL:any
   ){}
  
  ngOnInit(): void {
    //sans backend 
    //this.commandes=this.commandeService.getAllCommandes();
   this.commandeService.getAllCommande().subscribe({
    next:(commandes:Commande[])=>{this.commandes=commandes;this.isWaiting=false; this.errMsg=""},
     error:(err)=>{this.commandes=[],this.isWaiting=false,this.errMsg=err}
   })
}
} 
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
