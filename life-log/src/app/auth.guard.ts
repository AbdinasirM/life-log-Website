import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Add your authentication check logic here
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;

    if (state.url === '/sign-in') {
      if (isAuthenticated) {
        // Redirect authenticated users to /home
        return this.router.parseUrl('/home');
      } else {
        // Allow unauthenticated users to access the sign-in page
        return true;
      }
    }

    if (state.url === '/sign-up') {
      if (isAuthenticated) {
        // Redirect authenticated users to /home
        return this.router.parseUrl('/home');
      } else {
        // Allow unauthenticated users to access the sign-up page
        return true;
      }
    }

    // For other protected routes
    if (!isAuthenticated) {
      // Redirect to the main page if not authenticated
      return this.router.parseUrl('/');
    }

    // Allow access to protected routes for authenticated users
    return isAuthenticated;
  }
}
