// Import necessary modules and services
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html', // Template for the navbar component
  styleUrls: ['./navbar.component.scss'], // Styles for the navbar component
})
export class NavBarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // Navigate to the "About Us" page
  aboutUs() {
    this.router.navigate(['/about-us']);
  }

  // Navigate to the "Contact Us" page
  contactUs() {
    this.router.navigate(['/contact-us']);
  }

  // Navigate to the "Journals" page
  journal() {
    this.router.navigate(['/journals']);
  }

  // Navigate to the "Wellness" page
  wellness() {
    this.router.navigate(['/wellness']);
  }

  // Navigate to the "Home" page
  home() {
    this.router.navigate(['/home']);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Use the AuthService to check login status
  }

  // Log out the user from all platforms
  logOutAll() {
    this.authService.logOutAll().subscribe(
      () => {
        // console.log('Logged out from all platforms');
        alert('Logged out successfully');
        this.authService.clearToken(); // Clear token from local storage
        this.router.navigate(['/']); // Navigate to the home page
      },
      (error) => {
        // console.error('Error logging out from all platforms', error);
        alert('Error logging out ' + error.message);
        // Handle error logic here
      }
    );
  }
}
