// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Import your custom AuthService

@Component({
  selector: 'app-user-home', // Component selector
  templateUrl: './user-home.component.html', // Template file for rendering UI
  styleUrls: ['./user-home.component.scss'] // Styling specific to this component
})
export class UserHomeComponent implements OnInit {
  username: string = ""; // Initialize an empty username

  constructor(private auth: AuthService) {
    // Inject AuthService into the component
  }

  ngOnInit() {
    // When the component initializes, fetch the current user's information
    this.auth.getCurrentUser().subscribe(
      (currentLoggedIn) => {
        // Check if user information is available
        if (currentLoggedIn && currentLoggedIn.user && currentLoggedIn.user.name) {
          this.username = currentLoggedIn.user.name; // Set the username from user information
        }
      },
      (error) => {
        // console.error('Error fetching user information:', error); // Log an error if fetching user info fails
        alert('Error fetching user information' + error.message); // 
      }
    );
  }
}
