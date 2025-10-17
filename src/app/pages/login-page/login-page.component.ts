import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginServiceService} from '../../services/login-service.service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule,
  HttpClientModule,],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public email: string = "";
  public password: string = "";

  constructor(private http: HttpClient,
              private loginService: LoginServiceService) {
  }

  sendData() {
    this.loginService.login(this.email, this.password).subscribe({
      next: data => {
        if (data.code === "200") {
          alert(data.message);
        }
        else {
          alert(data.message);
        }
      }
    })
  }
}
