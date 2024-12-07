import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl='';

  constructor(private http:HttpClient) { }

  login(cre:{
    email:string;
    password:string;
    username:string;
  }):Observable<any>{
    return this.http.post(`${this.baseUrl}auth/login`,cre);
  }

  res(userData:{
    email:string;
    password:string;
    username:string;
  }):Observable<any>{
    return this.http.post(`${this.baseUrl}auth/register`,userData);
  }
}
