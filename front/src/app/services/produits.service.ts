

import { Inject, Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { Categorie } from '../models/categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  readonly httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  produits: Produit[] = [ ];
  constructor(private httpClient:HttpClient,
    private processHTTPMsgService : ProcessHttpmsgService,
     @Inject('baseURL') public baseURL:any
     ) { }
  

//sans back
  // getAllProduits():Produit[]{
  //   return this.produits;
  // }

  getAllProduits():Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(this.baseURL+"produits").pipe
    (catchError(this.processHTTPMsgService.handleError));
  }
    
  getProduitById(id:number):Observable<Produit>{
    return this.httpClient.get<Produit>(this.baseURL+"produits/"+id)
  }

  

  addonAddProduit(produit:Produit):Observable<Produit>{
    
    return this.httpClient.post<Produit>(this.baseURL+"produits",produit,this.httpOptions)
  }

  updateProduit(produit:Produit):Observable<Produit>{
 
    return this.httpClient.put<Produit>(this.baseURL+"produits/"+produit.id,produit,this.httpOptions)
  }

  delateProduit(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.baseURL+"produits/"+id)
  }

  
}


