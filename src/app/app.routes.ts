import { Routes } from '@angular/router';
import {ListeArticlesComponent} from './pages/liste-articles/liste-articles.component';
import {ArticleDetailPageComponent} from './pages/article-detail-page/article-detail-page.component';
import {AddArticleComponent} from './pages/add-article/add-article.component';

export const routes: Routes = [
  {path: 'liste-articles', component: ListeArticlesComponent},
  {path: 'liste-articles/:id', component: ArticleDetailPageComponent},
  {path : 'add-article', component: AddArticleComponent},
];
