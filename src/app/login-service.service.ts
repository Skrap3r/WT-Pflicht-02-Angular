import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public loginUser(name: string, password: string) : Observable<any>{
    let url = 'http://localhost:8080/steam/api/users/login';
    let body = new User(name, password);
    let headers = { 'Content-Type': 'application/json'};
    const header = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(url, body, {headers, responseType:'text'});
  
  }
  
}
