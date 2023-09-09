// Import necessary modules and services
import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Import your custom AuthService
import { Router } from '@angular/router'; // Import the Angular Router module

@Component({
  selector: 'app-sign-up', // Component selector
  templateUrl: './sign-up.component.html', // Template file for rendering UI
  styleUrls: ['./sign-up.component.scss'] // Styling specific to this component
})
export class SignUpComponent {
  user = { name: '', email: '', password: '' }; // Initialize an empty user object

  constructor(private authService: AuthService, private router: Router) {
    // Inject AuthService and Router into the component
  }

  onSubmit() {
    // Call the signUp() method from AuthService to sign up the user
    this.authService.signUp(this.user).subscribe(
      () => {
        // Redirect to the desired page after successful sign-up
        this.router.navigate(['/sign-in']); // Replace with your desired route
      },
      (error) => {
        // console.error('Sign-up error', error); // Log sign-up error
        alert('Sign-up error' + error.message); // Show an alert with the error message
        // Handle sign-up error here, e.g., show an error message to the user
      }
    );
  }
}
