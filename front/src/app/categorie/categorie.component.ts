import { Component, Inject, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/categorie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

categories:Categorie[]=[];
categorie:Categorie|undefined;
idCategorie:any;
constructor(private router:Router,
  private categorieService: CategorieService,
  private route:ActivatedRoute,@Inject('baseURL') public baseURL:any){}

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe({
      next:(categories:Categorie[])=>{this.categories=categories}
     })
    this.idCategorie= this.route.snapshot.params['id'];
  } 

  onAddCategorie() {
    this.router.navigateByUrl('/categories/edit/-1')
  }

  delateCategorie(id:number){
    this.categorieService.delateCategorie(id).subscribe(
     {
       next:(res:any)=>
         {
           let index=this.categories.findIndex(categorie=>categorie.id===id);
           if(index !=-1){
             this.categories.splice(index,1);
           }
         }
     } );
   }

  onAddProduit() {
    this.router.navigateByUrl('/produits/edit')
  }
}
