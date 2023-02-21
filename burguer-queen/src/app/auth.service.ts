import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthToken {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authUser(email: string, password: string): Observable<AuthToken[]> {
    // cambiar a post cuando la api ya este implementada
    // return this.http.post<AuthToken>('http://localhost:8000/auth', {email, password});
    return this.http.get<AuthToken[]>(`http://localhost:3000/auth?email=${email}&password=${password}`);
  }
}

//const sum = (x: number, y: number): number => x + y;  