import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande } from '../shared/commande';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  //private baseUrl = 'http://localhost:3000/api/commandes';

  constructor(private httpClient:HttpClient,
    private processHTTPMsgService : ProcessHttpmsgService,
     @Inject('baseURL') public baseURL:any) { }

  confirmCommande(commande: Commande): Observable<Commande> {
    return this.httpClient.post<Commande>(this.baseURL+"commandes/confirm", commande);
  }
}
