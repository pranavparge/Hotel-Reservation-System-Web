import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.component.html',
  styleUrls: ['./cust-login.component.css']
})
export class CustLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private http: HttpClient, private router: Router) {}

  loginClicked(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/auth/customer/sign-in', loginData).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        this.loginSuccess.emit();
        // Save JWT and other details in localStorage
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('customerId', response.customerId);
        localStorage.setItem('programType', response.programType);

        // Navigate to the book-room component
        this.router.navigate(['/cust-view-rooms']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    });
  }

  registerClicked(): void {
    // Navigate to the registration page
    this.router.navigate(['/cust-register']);
  }
}