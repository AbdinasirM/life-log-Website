// // import { Component } from '@angular/core';


// // export class HomeComponent {

// // }
// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { AuthService } from '../auth.service';

// // @Component({
// //   selector: 'app-profile',
// //   templateUrl: './profile.component.html',
// //   styleUrls: ['./profile.component.scss']
// // })
// // export class ProfileComponent implements OnInit {
// //   user: any;

// //   constructor(private http: HttpClient, private authService: AuthService) {}

// //   ngOnInit(): void {
// //     this.loadUserProfile();
// //   }

// //   async loadUserProfile(apiUrl: string) {
// //     try {
// //       const headers = this.authService.getAuthHeaders();
  
// //       const response = await this.http
// //         .get<any>(`${apiUrl}/users/me`, { headers })
// //         .toPromise();
// //       console.log('User Profile Response:', response); // Add this line
// //       this.user = response;
// //     } catch (error) {
// //       console.error('Error fetching user profile', error);
// //     }
// //   }
  
// // }

// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { AuthService } from '../auth.service';

// // @Component({
// //   selector: 'app-profile',
// //   templateUrl: './profile.component.html',
// //   styleUrls: ['./profile.component.scss']
// // })
// // export class ProfileComponent implements OnInit {
// //   user: any;

// //   constructor(private http: HttpClient, private authService: AuthService) {}

// //   ngOnInit(): void {
// //     this.loadUserProfile(this.authService.apiUrl); // Provide the apiUrl from AuthService
// //   }

// //   async loadUserProfile(apiUrl: string) {
// //     try {
// //       const headers = this.authService.getAuthHeaders();

// //       const response = await this.http
// //         .get<any>(`${apiUrl}/users/me`, { headers })
// //         .toPromise();
// //       this.user = response;
// //       console.log(`User profile : ${response}`);
// //     } catch (error) {
// //       console.error('Error fetching user profile', error);
// //     }
// //   }
// // }


// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { AuthService } from '../auth.service';

// // @Component({
// //   selector: 'app-profile',
// //   templateUrl: './profile.component.html',
// //   styleUrls: ['./profile.component.scss']
// // })
// // export class ProfileComponent implements OnInit {
// //   user: any;

// //   constructor(private http: HttpClient, private authService: AuthService) {}

// //   ngOnInit(): void {
// //     this.loadUserProfile(this.authService.apiUrl); // Provide the apiUrl from AuthService
// //   }

// //   async loadUserProfile(apiUrl: string) {
// //     try {
// //       const headers = this.authService.getAuthHeaders();

// //       const response = await this.http
// //         .get<any>(`${apiUrl}/users/me`, { headers })
// //         .toPromise();
        
// //       this.user = response.user; // Access user data from the "user" property
// //       console.log(`User profile : ${JSON.stringify(response.user)}`);
// //     } catch (error) {
// //       console.error('Error fetching user profile', error);
// //     }
// //   }
// // }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   user: any;
//   journals: any[] = [];

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.loadUserProfile();
//   }

//   async loadUserProfile() {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         // Handle token absence here, e.g., redirect to login page
//         return;
//       }

//       const headers = this.authService.getAuthHeaders(token);

//       const response = await this.http
//         .get<any>(`${this.authService.apiUrl}/users/me`, { headers })
//         .toPromise();
     

//       this.user = response.user; // Access user data from the "user" property
//       this.journals = response.journals; // Access journals data from the "journals" property

//       console.log(`User profile: ${JSON.stringify(response.user)}`);
//     console.log(`User journals: ${JSON.stringify(response.journals)}`);
//     } catch (error) {
//       console.error('Error fetching user profile', error);
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  journals: any[] = []; // Initialize journals as an empty array

  constructor(private http: HttpClient, private authService: AuthService, 
    private journalService: JournalService,
    private router:Router) {}

  async ngOnInit(): Promise<void> {
    await this.loadUserProfile();
    await this.loadJournals();
  }
  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  }
  async loadUserProfile(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to sign-in page if token is not present
        this.router.navigate(['sign-in']);
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      const response = await this.http
        .get<any>(`${this.authService.apiUrl}/users/me`, { headers })
        .toPromise();

      this.user = response.user; // Access user data from the "user" property

      // console.log(`User profile: ${JSON.stringify(response.user)}`);
    } catch (error) {
      console.error('Error fetching user profile', error);
    }
  }

  async loadJournals(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to sign-in page if token is not present
        this.router.navigate(['sign-in']);
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      const response = await this.http
        .get<any[]>(`${this.authService.apiUrl}/notes`, { headers })
        .toPromise();

      this.journals = response || []; // Assign the response or an empty array

      // console.log(`User journals: ${JSON.stringify(response)}`);
    } catch (error) {
      console.error('Error fetching user journals', error);
    }
  }
  async addJournal(journalEntry: any): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to sign-in page if token is not present
        this.router.navigate(['sign-in']);
        return;
      }

      const headers = this.authService.getAuthHeaders(token);

      const response = await this.journalService
        .addJournal(journalEntry)
        .toPromise();

      // console.log('Added journal entry:', response);
      await this.loadUserProfile();
    } catch (error) {
      console.error('Error adding journal entry', error);
    }
  }

  // async deleteJournal(id: string): Promise<void> {
  //   try {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       // Handle token absence here, e.g., redirect to login page
  //       return;
  //     }

  //     const headers = this.authService.getAuthHeaders(token);

  //     const response = await this.journalService
  //       .deleteJournal(id)
  //       .toPromise();

  //     console.log('Deleted journal entry:', response);
  //     await this.loadUserProfile();
  //   } catch (error) {
  //     console.error('Error deleting journal entry', error);
  //   }
  // }

  // deleteJournal(journalId: string): void {
  //   this.journalService.deleteJournal(journalId).subscribe(
  //     () => {
  //       console.log('Deleted journal entry');
  //       this.loadUserProfile(); // Reload the user profile after deletion
  //       this.router.navigate(['/users/me']); // Redirect after successful addition
  //     },
  //     (error) => {
  //       console.error('Error deleting journal entry', error);
  //       // Handle error here, e.g., show an error message to the user
  //     }
  //   );
  // }
  async deleteJournal(journalId: string): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to sign-in page if token is not present
        this.router.navigate(['sign-in']);
        return;
      }
  
      const headers = this.authService.getAuthHeaders(token);
  
      await this.journalService.deleteJournal(journalId).toPromise();
  
      console.log('Deleted journal entry');
      await this.loadUserProfile(),
      location.reload(); // reload the page
      this.router.navigate(['users/me']); // Redirect after successful deletion
    } catch (error) {
      console.error('Error deleting journal entry', error);
      // Handle error here, e.g., show an error message to the user
    }
  }
  
  
  // formatTimestamp(timestamp: number): string {
  //   const date = new Date(timestamp);
  //   return date.toISOString(); // Adjust the format as needed
  // }
  
}

