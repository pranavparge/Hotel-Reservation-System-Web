import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

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

    this.http.post('http://localhost:8080/auth/staff/sign-in', loginData).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);

        // Save JWT and other staff details in localStorage
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('staffId', response.staffId.toString());
        localStorage.setItem('email', response.email);
        localStorage.setItem('name', response.name);

        // Navigate to the staff dashboard or another relevant route
        this.router.navigate(['/create-room']);
      },
      error: (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    });
  }
}