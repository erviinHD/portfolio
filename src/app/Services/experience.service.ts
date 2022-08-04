import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienceDetailResponse, ExperienceResponse } from '../Models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  URL: string = environment.API_URL;
  constructor(private http: HttpClient) { }

  getExperience(): Observable<ExperienceResponse> {
    return this.http.get<ExperienceResponse>(`${this.URL}/experience`)
  }

  getExperienceById(id: number): Observable<ExperienceDetailResponse> {
    return this.http.get<ExperienceDetailResponse>(`${this.URL}/experience/${id}`)
  }
}
