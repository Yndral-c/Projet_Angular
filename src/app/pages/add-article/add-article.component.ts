import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ArticleServiceService} from '../../services/article-service.service';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-add-article',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss'
})
export class AddArticleComponent {
  public article = {
    id: null,
    title: "",
    desc: "",
    author: "",
    imgPath: "",
  }

  constructor(private router: Router,
              private articleService: ArticleServiceService) {
  }

  sendNewArticle() {
    this.articleService.addArticle(this.article).subscribe({
      next: data => {
        if (data.code == "200") {
          this.router.navigate([`/liste-articles/${data.data.id}`]);;
        }
      }
    });
  }
}
