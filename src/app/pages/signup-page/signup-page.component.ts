import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-signup-page',
    imports: [
        FormsModule
    ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  public newUser = {
    "email": "user@example.com",
    "password": "password",
    "passwordConfirm": "password",
    "pseudo": "User",
    "cityCode": "44000",
    "city": "Nantes",
    "phone": "0600000000"
  }
}
