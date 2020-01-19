import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import {Observable} from 'rxjs';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {
    fireAuth.authState.subscribe(auth => {
      if (auth) {
        alert('Zalogowano');
        console.log('logged in - zmiana stanu');
        console.log(auth);
      } else {
        alert('Wylogowano');
        console.log('not logged in - zmiana stanu');
        console.log(auth);
      }
    });
    console.log('Start');

  }

  get user(): Observable<User> | null {
    return this.fireAuth.authState;
  }

  signIn({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    this.fireAuth.auth.signOut();
  }
}
