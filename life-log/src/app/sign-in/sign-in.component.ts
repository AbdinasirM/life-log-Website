// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.scss']
// })
// export class SignInComponent {

// }

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    try {
      const response = await this.authService.login(this.credentials).toPromise();
      // console.log('Login successful', response);

      localStorage.setItem('token', response.token);

      this.router.navigate(['/home']); // Redirect after successful login
    } catch (error) {
      console.error('Login error', error);
      window.alert('Login error: make sure you have registered account and password');
     
      // Handle login error here, show error message to user if needed
    }
  }
}
