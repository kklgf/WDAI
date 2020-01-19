import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs/operators';
import { UserRole } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      map(user => {
        if (!user) {
          return this.router.createUrlTree(['/sign-in']);
        }
        const roles: UserRole[] = route.data.roles || [];
        const hasRole = roles.length === 0 || roles.some(role => user.email.includes(role));
        if (!hasRole) {
          return this.router.createUrlTree(['/']);
        }
        return true;
      })
    )
  }
}
