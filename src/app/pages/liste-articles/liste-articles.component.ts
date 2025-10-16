import { Component } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  imports: [HttpClientModule],
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.scss'
})
export class ListeArticlesComponent {

  public articles: any[] = [];

  constructor(private ArticleService: ArticleServiceService,
              private router: Router) {
  }

  onClickCallApi() {
    this.ArticleService.getArticles().subscribe({
      next: data => {
        if (data.code == "200") {
          this.articles = data.data;
        }
      }
    });
  }
  openArticle(id: number){
    this.router.navigate(['/liste-articles', id]);
  }

  openAddArticle() {
    this.router.navigate(['/add-article']);
  }
}
