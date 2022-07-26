import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL: string = environment.API_URL;
  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/form`, data);
  }


}
