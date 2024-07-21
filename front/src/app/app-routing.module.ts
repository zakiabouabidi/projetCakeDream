import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';
<<<<<<< HEAD
import { authGuard } from './guards/auth-guard';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
=======
import { CommandeComponent } from './commande/commande.component';
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b

const routes: Routes = [
  {path:'',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:HomeComponent},
  {path:'produits',component:ProduitsComponent},
<<<<<<< HEAD
  {path:'produits/edit',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component:EditProduitComponent},
  { path: 'produits/panier',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component: PanierComponent }, // Ajoutez cette ligne pour le composant PanierComponent
 {path:'produits/edit/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component:EditProduitComponent},
  {path:'produits/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component: DetailProduitComponent},
  {path:'categories',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:CategorieComponent},
  {path:'categories/edit',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:EditCategorieComponent},
  {path:'categories/edit/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:EditCategorieComponent},
  { path: 'categories/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component: DetailCategorieComponent },
  {path:'admin', canActivate:[authGuard], data: {roles: ['ROLE_ADMIN']},component:AdminComponent},
=======
  {path:'produits/edit', component:EditProduitComponent},
  { path: 'produits/panier', component: PanierComponent }, // Ajoutez cette ligne pour le composant PanierComponent
 {path:'produits/edit/:id', component:EditProduitComponent},
  {path:'produits/:id', component: DetailProduitComponent},
  {path:'categories',component:CategorieComponent},
  {path:'categories/edit',component:EditCategorieComponent},
  {path:'categories/edit/:id',component:EditCategorieComponent},
  { path: 'categories/:id', component: DetailCategorieComponent },
  {path:'commandes',component:CommandeComponent},
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'**', component:NotfoundComponent},
  // {path:'',redirectTo:'/produits',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
