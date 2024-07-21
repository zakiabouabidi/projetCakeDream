import { Component, Inject, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../shared/categorie';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

categories!:Categorie[];
categorie:Categorie|undefined;
idCategorie:any;
errMsg!:string;
isWaiting:boolean=true;
isWaitingDelete: boolean = false;
showAdminFn = false;
authUserSub!: Subscription; 
constructor(private router:Router,
  private categorieService: CategorieService,
  private route:ActivatedRoute,@Inject('baseURL') public baseURL:any,
  private authService: AuthService){}

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe({
      next:(categories:Categorie[])=>{this.categories=categories;this.isWaiting=false; this.errMsg=""},
      error:(err)=>{this.categories=[],this.isWaiting=false, this.errMsg=err}
     })
    this.idCategorie= this.route.snapshot.params['id'];

    this.authUserSub=this.authService.AuthenticatedUser$.subscribe({
      next: user => {
        // If user is authenticated
        if (user) {
          // Show admin Fn if user has admin role
          this.showAdminFn = user.role.name === 'ROLE_ADMIN';
          console.log(this.showAdminFn);

        } else {
          this.showAdminFn = false;
        }
      }
    })
  } 

  onAddCategorie() {
    this.router.navigateByUrl('/categories/edit/-1')
  }

  delateCategorie(id:number){
    this.isWaitingDelete = true
    this.categorieService.delateCategorie(id).subscribe(
     {
       next:(res:any)=>
         { this.isWaitingDelete = false
           let index=this.categories.findIndex(categorie=>categorie.id===id);
           if(index !=-1){
             this.categories.splice(index,1);
           }
         }
     } );
   }
   confirmDelete(id: number): void {
    const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");

    if (confirmDelete) {
      this.delateCategorie(id);
    }
  }
  onAddProduit() {
    this.router.navigateByUrl('/produits/edit')
  }
}
