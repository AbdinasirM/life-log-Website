// Import necessary modules and components
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html', // Template file for rendering UI
  styleUrls: ['./sign-in.component.scss'] // Styling for the component
})
export class SignInComponent {
  credentials = {
    email: '', // Placeholder for user's email
    password: '' // Placeholder for user's password
  };

  constructor(private authService: AuthService, private router: Router) {}

  // Function to handle form submission
  async onSubmit() {
    try {
      // Call the login function from the AuthService
      const response = await this.authService.login(this.credentials).toPromise();
      // console.log('Login successful', response);

      // Store the received token in local storage for authentication
      localStorage.setItem('token', response.token);

      this.router.navigate(['/home']); // Redirect after successful login
    } catch (error) {
      // console.error('Login error', error);
      alert('Login error: make sure you have registered account and password');
     
      // Handle login error here, show error message to user if needed
    }
  }
}
