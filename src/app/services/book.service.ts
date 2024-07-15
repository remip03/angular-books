import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = 'http://localhost:8000/api'

  constructor(private httpClient: HttpClient) { }

  getBooks() : Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.apiURL}/books`)
  }

  getBook(id:number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.apiURL}/books/${id}`)
  }

  addBook(livre: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.apiURL}/books`, livre)
  }

  updateBook(livre: Book): Observable<Book>{
    return this.httpClient.put<Book>(`${this.apiURL}/books/${livre.id}`,livre)
  }

  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(`${this.apiURL}/books/${id}`)
  }

}
