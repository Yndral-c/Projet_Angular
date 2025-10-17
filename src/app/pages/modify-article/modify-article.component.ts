import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ArticleServiceService} from '../../services/article-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-modify-article',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './modify-article.component.html',
  styleUrl: './modify-article.component.scss'
})
export class ModifyArticleComponent {
  public id: string = "";
  public title: string = "";
  public desc: string = "";
  public author : string = "";
  public imgPath: string = "";

  public articles: any[] = [];
  public selectArticle: any = {}

  constructor(private ArticleService: ArticleServiceService,
              private http: HttpClient,) {}

  ngOnInit() {
    this.ArticleService.getArticles().subscribe({
      next: data => {
        if (data.code == "200") {
          this.articles = data.data;
        }
      }
    });
  };

  modifyArticle(article: any) {
    this.selectArticle = article;
  };

  sendModifyArticle(){
    const articleData = {
      id: this.selectArticle.id,
      title: this.selectArticle.title,
      desc: this.selectArticle.desc,
      author: this.selectArticle.author,
      imgPath: this.selectArticle.imgPath,
    }

    if(this.title !== '') {
      articleData.title = this.title;
    };
    if(this.desc !== '') {
      articleData.desc = this.desc;
    };
    if(this.imgPath !== '') {
      articleData.imgPath = this.imgPath;
    };
    if(this.imgPath !== '') {
      articleData.imgPath = this.imgPath;
    };

    this.ArticleService.addArticle(articleData).subscribe({
      next: () => {
        alert("Successfully added the article");
      }
    });
  }
}
