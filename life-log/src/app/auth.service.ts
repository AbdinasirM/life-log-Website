// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   public apiUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) {}

//   login(credentials: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/users/login`, credentials);
//   }

//   setToken(token: string) {
//     // Implement token storage (e.g., localStorage)
//   }

//   getToken(): string | null {
//     const token =  '';/* Implement your logic to retrieve token from localStorage */
//     return token || null;
//   }

//   getAuthHeaders(): HttpHeaders {
//     const token = this.getToken();
//     if (token) {
//       return new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     }
//     return new HttpHeaders();
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl = 'http://localhost:3000'; // Update with your API URL

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    const url = `${this.apiUrl}/users/login`; // Update with your API endpoint
    return this.http.post(url, credentials);
  }

  getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }

  signUp(user: any): Observable<any> {
    const signUpUrl = `${this.apiUrl}/users`; // Update with your API endpoint
    return this.http.post(signUpUrl, user);
  }

 


  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null; // Ensure this logic is correct
  }
  
  clearToken() {
    localStorage.removeItem('token'); // Make sure this method is clearing the token
  }
  logOutAll(): Observable<any> {
    const url = `${this.apiUrl}/users/me/logoutall`; // Update with your new logout endpoint
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}` // Replace with your token key
    };
  
    return this.http.post(url, null, { headers });
  }

}
