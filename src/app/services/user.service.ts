import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = 'http://localhost:8000/api'

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiURL}/user`)
  }

}
