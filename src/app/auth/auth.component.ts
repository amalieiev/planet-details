import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Using FormGroup instead of FormControl will provide us more flexibility in feature if we decide to add one more control.
    this.authForm = this.fb.group({
      // Using build in Validators is better than perform validation after clicking Submit.
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public get email(): AbstractControl {
    return this.authForm.get('email');
  }

  public submitHandler(): void {
    const { email } = this.authForm.value;

    this.authService.singIn(email);
  }
}
