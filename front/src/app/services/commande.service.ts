

import { Inject, Injectable } from '@angular/core';
import { Commande } from '../models/commande';
import { Categorie } from '../models/categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  readonly httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  commande: Commande[] = [ ];
  constructor(private httpClient:HttpClient,
    private processHTTPMsgService : ProcessHttpmsgService,
     @Inject('baseURL') public baseURL:any
     ) { }
  

//sans back
  // getAllProduits():Produit[]{
  //   return this.produits;
  // }

  getAllCommande():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>(this.baseURL+"commandes").pipe
    (catchError(this.processHTTPMsgService.handleError));
  }
     

  
}


