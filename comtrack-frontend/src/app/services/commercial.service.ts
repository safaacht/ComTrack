import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commercial } from '../models/commercial';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {
  // connecting backend and frontend

  private apiUrl = 'http://localhost:8080/api/commerciaux';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Commercial[]> {
    return this.http.get<Commercial[]>(this.apiUrl);
  }

  getById(id: number): Observable<Commercial> {
    return this.http.get<Commercial>(`${this.apiUrl}/${id}`);
  }

  create(commercial: Commercial): Observable<Commercial> {
    return this.http.post<Commercial>(this.apiUrl, commercial);
  }

  update(id: number, commercial: Commercial): Observable<Commercial> {
    return this.http.put<Commercial>(`${this.apiUrl}/${id}`, commercial);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}