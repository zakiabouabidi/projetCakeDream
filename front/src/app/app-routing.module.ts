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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'produits',component:ProduitsComponent},
  {path:'produits/edit', component:EditProduitComponent},
  { path: 'produits/panier', component: PanierComponent }, // Ajoutez cette ligne pour le composant PanierComponent
 {path:'produits/edit/:id', component:EditProduitComponent},
  {path:'produits/:id', component: DetailProduitComponent},
  {path:'categories',component:CategorieComponent},
  {path:'categories/edit',component:EditCategorieComponent},
  {path:'categories/edit/:id',component:EditCategorieComponent},
  { path: 'categories/:id', component: DetailCategorieComponent },
  {path:'signin',component:SigninComponent},
  {path:'**', component:NotfoundComponent}
  // {path:'',redirectTo:'/produits',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
