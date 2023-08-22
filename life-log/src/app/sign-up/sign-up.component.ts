// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent {

// }

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.signUp(this.user).subscribe(
      () => {
        // Redirect to the desired page after successful sign-up
        this.router.navigate(['/sign-in']); // Replace with your desired route
      },
      (error) => {
        console.error('Sign-up error', error);
        // Handle sign-up error here, e.g., show an error message to the user
      }
    );
  }
}
