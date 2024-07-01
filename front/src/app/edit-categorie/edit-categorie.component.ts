import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/categorie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit{
  
  categorie!:Categorie;

  constructor(private router:Router ,private route:ActivatedRoute, private categorieservice:CategorieService){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (result)=>{
        let id=result.get('id')
        if(id!="-1")this.initCategorie(id);
        else this.categorie=new Categorie(null,"","")

      }
    )
  }


  onCategorie(){
    this.router.navigateByUrl('/categories')
  }

  onSubmit(){
   if(this.categorie.id==null){
     this.categorieservice.addonAddCategorie(this.categorie).subscribe({
    next:(categorie)=>{this.router.navigateByUrl("categories/"+categorie.id) },
    error:(error)=>{console.log("error")},
    complete: ()=>console.log("fin")
  });
   }else{}
      this.categorieservice.updateCategorie(this.categorie).subscribe({
     next:(categorie)=>{this.router.navigateByUrl("categories/"+categorie.id) },
     error:(error)=>{console.log("error")},
     complete: ()=>console.log("fin")
   });
   
  }

  
 initCategorie(id:any){
  this.categorieservice.getCategorieById(id).subscribe({
    next:(categorie)=>this.categorie=categorie,
    error:(erro)=>console.log("error")
  })
}

}
