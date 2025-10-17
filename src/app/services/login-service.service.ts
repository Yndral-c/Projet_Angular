import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(email : string, password: string) : Observable<any> {
    const infos = {
      email: email,
      password: password,
    }
    return this.http.post<any>(`http://localhost:3000/login`, infos)
  }
}
