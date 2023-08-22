import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  constructor(private router: Router, private authService: AuthService) {}
  aboutUs() {
    this.router.navigate(['/about-us']);
  }
  contactUs() {
    this.router.navigate(['/contact-us']);
  }
  journal() {
    this.router.navigate(['/users/me']);
  }
  //   isLoggedIn(): boolean {
  //     return this.authService.isLoggedIn();
  //   }

  //   logOut(): void {
  //     this.authService.signOut().subscribe(
  //       () => {
  //         // Redirect to the desired route after successful sign-out
  //         this.router.navigate(['/sign-in']); // Replace with your desired route
  //       },
  //       (error) => {
  //         console.error('Sign-out error', error);
  //         // Handle sign-out error here
  //       }
  //     );
  //   }

  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn(); // Use the AuthService to check login status
  // }

//   logOut() {
//     this.authService.logOut(); // Call the AuthService's logOut method
//   }
// logOut() {
//     // Implement the logout functionality
//     // Call the logout API, remove the token, and navigate to the login page
//     // Example:
//     this.authService.logOut().subscribe(
//       () => {
//         localStorage.removeItem('token');
//         this.router.navigate(['/sign-in']);
// 		location.reload(); // reload the page

//       },
//       (error) => {
//         console.error('Logout error', error);
//       }
//     );
//   }

// logOutAll() {
//   this.authService.logOutAll().subscribe(
//     () => {
//       console.log('Logged out from all platforms');
//       this.router.navigate(['/sign-in']);
//       location.reload(); // reload the page
//       // You can redirect or perform other actions after successful logout
//     },
//     (error) => {
//       console.error('Error logging out from all platforms', error);
//       // Handle error logic here
//     }
//   );
// }



// isLoggedIn(): boolean {
//   return this.authService.isLoggedIn();
// }

// logOutAll() {
//   this.authService.logOutAll().subscribe(
//     () => {
//       console.log('Logged out from all platforms');
//       this.router.navigate(['/sign-in']);
//       location.reload();
//     },
//     (error) => {
//       console.error('Error logging out from all platforms', error);
//     }
//   );
// }
// }


isLoggedIn(): boolean {
  return this.authService.isLoggedIn(); // Use the AuthService to check login status
}

logOutAll() {
  this.authService.logOutAll().subscribe(
    () => {
      console.log('Logged out from all platforms');
      this.authService.clearToken(); // Clear token from local storage
      this.router.navigate(['/sign-in']);
    },
    (error) => {
      console.error('Error logging out from all platforms', error);
      // Handle error logic here
    }
  );
}
}