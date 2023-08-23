// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-user-home',
//   templateUrl: './user-home.component.html',
//   styleUrls: ['./user-home.component.scss']
// })
// export class UserHomeComponent implements OnInit {
//   constructor(private auth: AuthService) {}

//   usernames: any;

//   ngOnInit() {
//     this.getUsernames();
//   }

//   getUsernames() {
//     // Assuming the AuthService provides a method to get the username
//     this.usernames = this.auth.getUsernameFromToken(); // Replace with the actual method to get the username
//   }
// }

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  username: string = ""

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getCurrentUser().subscribe(
      (currentLoggedIn) => {
        if (currentLoggedIn && currentLoggedIn.user && currentLoggedIn.user.name) {
          this.username = currentLoggedIn.user.name;
         
        }
      },
      (error) => {
        console.error('Error fetching user information:', error);
      }
    );
  }
}
