import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiURL = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  getAuthors() : Observable<Author[]>{
    return this.httpClient.get<Author[]>(`${this.apiURL}/author`)
  }

  getAuthor(id: number): Observable<Author>{
    return this.httpClient.get<Author>(`${this.apiURL}/author/${id}`)
  }

  addAuthor(auteur: Author): Observable<Author>{
    return this.httpClient.post<Author>(`${this.apiURL}/author`, auteur)
  }

  updateAuthor(auteur: Author): Observable<Author>{
    return this.httpClient.put<Author>(`${this.apiURL}/author/${auteur.id}`, auteur)
  }

  deleteAuthor (id: number): Observable<Author>{
    return this.httpClient.delete<Author>(`${this.apiURL}/author/${id}`)
  }

}

