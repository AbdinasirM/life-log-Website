import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-and-sign-up',
  templateUrl: './sign-in-and-sign-up.component.html',
  styleUrls: ['./sign-in-and-sign-up.component.scss']
})
export class SignInAndSignUpComponent {
  constructor(private router: Router) { }
  signIn() {
    this.router.navigate(['/sign-in']);
  }
}
