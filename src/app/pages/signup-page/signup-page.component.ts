import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {LoginServiceService} from '../../services/login-service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
    imports: [
        FormsModule,
      HttpClientModule
    ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  public email: string = "";
  public password: string = "";
  public passwordConfirm: string = "";
  public pseudo: string = "";
  public cityCode: string = "";
  public city: string = "";
  public phone: string = "";

  public newUser = {};

  constructor(private loginService: LoginServiceService,
              private http: HttpClient){}

  sendData(){
    this.newUser = {
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      pseudo: this.pseudo,
      cityCode: this.cityCode,
      city: this.city,
      phone: this.phone,
    }

    if (this.password === this.passwordConfirm) {
      this.loginService.signup(this.newUser).subscribe({
        next: data => {
          if (data.code === "200") {
            alert(data.message);
          } else {
            alert(data.message);
          }
        }
      })
    }
    else{
      alert("Les mots de passes ne sont pas identique")
    }
  }
}
