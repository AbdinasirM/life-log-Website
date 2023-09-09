import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl = 'http://localhost:5000'; // Update with your API URL

  constructor(private http: HttpClient) {}

  // Perform user login
  login(credentials: any): Observable<any> {
    const url = `${this.apiUrl}/users/login`; // Update with your API endpoint
    return this.http.post(url, credentials);
  }

  // Generate HTTP headers with authentication token
  getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  // Perform user sign-up
  signUp(user: any): Observable<any> {
    const signUpUrl = `${this.apiUrl}/users`; // Update with your API endpoint
    return this.http.post(signUpUrl, user);
  }

  // Check if a user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null; // Ensure this logic is correct
  }

  // Clear authentication token from local storage
  clearToken() {
    localStorage.removeItem('token'); // Make sure this method is clearing the token
  }

  // Log out user from all devices
  logOutAll(): Observable<any> {
    const url = `${this.apiUrl}/users/me/logoutall`; // Update with your new logout endpoint
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Replace with your token key
    };

    return this.http.post(url, null, { headers });
  }

  // Get current user's details
  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = this.getAuthHeaders(token);
      const currentUserUrl = `${this.apiUrl}/users/me`; // Update with your API endpoint
      return this.http.get<any>(currentUserUrl, { headers });
    }
    return new Observable<any>((observer) => observer.next(null));
  }
}
