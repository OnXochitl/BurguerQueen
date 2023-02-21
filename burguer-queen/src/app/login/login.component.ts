import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthToken } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    })
  }

  logInUser() {
    const { email, password } = this.contactForm.value;
    this.authService.authUser(email, password).subscribe((token: AuthToken[]) => {
      if(token.length === 1) {
        this.router.navigate(['/home']);
      }
    });
  }
}