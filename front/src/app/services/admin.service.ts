import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,  @Inject('baseURL')private baseURL:string,
              private processHTTPMsgService : ProcessHttpmsgService ) { }

  getAdminBoard(): Observable<string> {
    //return this.contacts;
  return  this.http.get<string>(this.baseURL+"admin",{ withCredentials: true})
                  .pipe(catchError(this.processHTTPMsgService.handleError));
            
  }
}
