import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Credentials } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBarService: MatSnackBar
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.authService.signIn(this.signInForm.value as Credentials)
      .then(() => this.router.navigate(['']))
      .catch(() => {
        this.snackBarService.open('Niepoprawne dane logowania.', null, {
        duration: 2000, });
      });
  }
}
