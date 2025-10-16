import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ArticleServiceService {
  private apiUrl = "http://localhost:3000/articles"

  constructor(private http : HttpClient ) { }

  getArticles() : Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addArticle(article : any) : Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, article)
  }

  deleteArticle(id : any) : Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
