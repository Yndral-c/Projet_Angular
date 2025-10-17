import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestion-article';

  constructor(private router: Router) { }

  goToList(){
    this.router.navigate(['/liste-articles']);
  }

  goToLogin(){
    window.open('/login-page', '_self');
  }

  goToSignup(){
    window.open('/signup-page', '_self');
  }
}
