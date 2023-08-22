// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // Add your authentication check logic here
//     const token = localStorage.getItem('token');
//     const isAuthenticated = !!token;

//     if (!isAuthenticated) {
//       // Redirect to sign-in page if not authenticated
//       return this.router.parseUrl('/sign-in');
//     }

//     return isAuthenticated;
//   }
// }

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
        // Redirect authenticated users to /users/me
        return this.router.parseUrl('/users/me');
      } else {
        // Allow unauthenticated users to access the sign-in page
        return true;
      }
    }
    if (state.url === '/sign-up') {
      if (isAuthenticated) {
        // Redirect authenticated users to /users/me
        return this.router.parseUrl('/users/me');
      } else {
        // Allow unauthenticated users to access the sign-in page
        return true;
      }
    }

    if (!isAuthenticated) {
      // Redirect to sign-in page if not authenticated
      return this.router.parseUrl('/sign-in');
    }

    return isAuthenticated;
  }
}
