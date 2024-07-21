<<<<<<< HEAD
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../shared/commande';
=======


import { Inject, Injectable } from '@angular/core';
import { Commande } from '../models/commande';
import { Categorie } from '../models/categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
<<<<<<< HEAD

  //private baseUrl = 'http://localhost:3000/api/commandes';

  constructor(private httpClient:HttpClient,
    private processHTTPMsgService : ProcessHttpmsgService,
     @Inject('baseURL') public baseURL:any) { }

  confirmCommande(commande: Commande): Observable<Commande> {
    return this.httpClient.post<Commande>(this.baseURL+"commandes/confirm", commande);
  }
}
=======
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


>>>>>>> 7016be8b73be5f7c8b22166739704b1b8df6a27b
