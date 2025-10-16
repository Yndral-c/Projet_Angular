import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleServiceService} from '../../services/article-service.service';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-article-detail-page',
  imports: [HttpClientModule],
  templateUrl: './article-detail-page.component.html',
  styleUrl: './article-detail-page.component.scss'
})
export class ArticleDetailPageComponent {
  public article: any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleServiceService,
              private appComponent: AppComponent,) {
  }

  ngOnInit() {
    const articleId = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.getArticles().subscribe({
      next: data => {
        if (data.code =="200" && data.data && articleId) {
          this.article = data.data.find((art : any) => art.id.toString() === articleId);
        }
        if (!this.article) {
          alert("gros nul")
        }
      }
    })
  }

  deleteThisArticle(id : any) {
    if (confirm('Es-tu sûr de vouloir supprimer cet article ?')) {
      this.articleService.deleteArticle(id).subscribe({});
      this.appComponent.goToList()
    }
  }
}
