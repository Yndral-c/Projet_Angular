import { Routes } from '@angular/router';
import {ListeArticlesComponent} from './pages/liste-articles/liste-articles.component';
import {ArticleDetailPageComponent} from './pages/article-detail-page/article-detail-page.component';
import {AddArticleComponent} from './pages/add-article/add-article.component';
import {ModifyArticleComponent} from './pages/modify-article/modify-article.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SignupPageComponent} from './pages/signup-page/signup-page.component';

export const routes: Routes = [
  {path: 'liste-articles', component: ListeArticlesComponent},
  {path: 'liste-articles/:id', component: ArticleDetailPageComponent},
  {path : 'add-article', component: AddArticleComponent},
  {path: 'modify-article', component: ModifyArticleComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'signup-page', component: SignupPageComponent},
];
