import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserRole } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: firebase.User = null;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.user
      .subscribe(user => this.user = user);
  }

  signOut(): void {
    this.authService.signOut();
  }

  get isSignedIn(): boolean {
    return !!this.user;
  }

  get isAdmin(): boolean {
    return this.user && this.user.email.startsWith(UserRole.ADMIN);
  }
}
