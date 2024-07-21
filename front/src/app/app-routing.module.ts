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
import { authGuard } from './guards/auth-guard';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:HomeComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'produits/edit',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component:EditProduitComponent},
  { path: 'produits/panier',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component: PanierComponent }, // Ajoutez cette ligne pour le composant PanierComponent
 {path:'produits/edit/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component:EditProduitComponent},
  {path:'produits/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component: DetailProduitComponent},
  {path:'categories',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:CategorieComponent},
  {path:'categories/edit',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:EditCategorieComponent},
  {path:'categories/edit/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']},component:EditCategorieComponent},
  { path: 'categories/:id',canActivate:[authGuard],data: {roles: ['ROLE_ADMIN','ROLE_USER']}, component: DetailCategorieComponent },
  {path:'admin', canActivate:[authGuard], data: {roles: ['ROLE_ADMIN']},component:AdminComponent},
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
