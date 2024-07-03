import { Inject, Injectable, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  //private baseUtRL = 'http://localhost:3000/api/categories';
  constructor(private httpClient:HttpClient, @Inject('baseURL') public baseURL:any,
  private processHTTPMsgService : ProcessHttpmsgService) { }
 
  categories:Categorie[]=[];
  readonly httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  
  getAllCategories():Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(this.baseURL+"categories").pipe
    (catchError(this.processHTTPMsgService.handleError));
  }
    
  getCategorieById(id:number):Observable<Categorie>{
    return this.httpClient.get<Categorie>(this.baseURL+"categories/"+id)
  }
addonAddCategorie(categorie:Categorie):Observable<Categorie>{
 
  return this.httpClient.post<Categorie>(this.baseURL+"categories",categorie,this.httpOptions)
}


updateCategorie(categorie:Categorie):Observable<Categorie>{
 
  return this.httpClient.put<Categorie>(this.baseURL+"categories/"+categorie.id,categorie,this.httpOptions)
}

  // delateCategorie(id:number):Observable<any>{
  //   return this.httpClient.delete<any>(`${this.baseURL}/${id}`);
  //   }
    delateCategorie(id:number):Observable<any>{
      return this.httpClient.delete<any>(this.baseURL+"categories/"+id)
    }
}
