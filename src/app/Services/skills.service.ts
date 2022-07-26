import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SkillsResponse } from '../Models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL: string = environment.API_URL;
  constructor(private http: HttpClient) { }

  getSkills(): Observable<SkillsResponse> {    
    return this.http.get<SkillsResponse>(`${this.URL}/skills`)
  }

}
