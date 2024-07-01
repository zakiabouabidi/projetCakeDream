import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { CategorieComponent } from './categorie/categorie.component';
import { BaseURL } from './models/baseUrl';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategorieComponent,
    HomeComponent,
    SigninComponent,
    NotfoundComponent,
    EditProduitComponent,
    EditCategorieComponent,
    DetailProduitComponent,
    DetailCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   { provide:'baseURL', useValue:BaseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
