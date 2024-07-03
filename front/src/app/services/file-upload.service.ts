import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private http: HttpClient,
    @Inject('baseURL') public baseURL:any) { }
   
   // Uploads an image file to the server with the specified ID
   upload(file: File, id: number): Observable<HttpEvent<any>> {
    // Create a new FormData object to hold the file data
    const formData: FormData = new FormData();
    formData.append('file', file);  // Append the file to the FormData object

    const req = new HttpRequest('PATCH',
      `${this.baseURL}storage/upload/${id}`,
      formData,
      {
        reportProgress: true,  // Enable progress events for the request
        responseType: 'json',  // Expect a JSON response from the server
        withCredentials: true 
      });

    return this.http.request(req);
  }
}
