import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  private apiUrl = 'http://localhost:3000/cat-facts';

  constructor(private http: HttpClient) { }

  getCatFacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
