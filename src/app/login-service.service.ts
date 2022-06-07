import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public loginUser(name: string, password: string) : Observable <User> {
    let url = 'http://localhost:8080/steam/api/users/login';
    let body = new User(name, password);
    let headers = { 'Content-Type': 'application/json'};
    return this.http.post<User>(url, body, {headers});
  }
  
}
