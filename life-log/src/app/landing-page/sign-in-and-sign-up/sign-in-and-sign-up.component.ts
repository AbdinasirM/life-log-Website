import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-and-sign-up',
  templateUrl: './sign-in-and-sign-up.component.html', // Template file for rendering UI
  styleUrls: ['./sign-in-and-sign-up.component.scss'], // Styles applied to the component
})
export class SignInAndSignUpComponent {
  constructor(private router: Router) {}

  // Function to navigate to the sign-in page
  signIn() {
    this.router.navigate(['/sign-in']); // Navigate to the '/sign-in' route
  }
  // Function to navigate to the sign-up page
  signOut() {
    this.router.navigate(['/sign-up']); // Navigate to the '/sign-up' route
  }
}
