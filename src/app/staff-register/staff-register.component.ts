import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.component.html',
  styleUrls: ['./staff-register.component.css']
})
export class StaffRegisterComponent {
  registrationData = {
    email: '',
    name: '',
    password: ''
  };
  isLoading = false; // For loading spinner

  constructor(private http: HttpClient, private router: Router) {}

  onRegister(): void {
    this.isLoading = true;

    this.http.post('http://localhost:8080/auth/staff/sign-up', this.registrationData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        alert(`Registration Successful! 
        Staff ID: ${response.staffId}
        Email: ${response.email}
        Name: ${response.name}`);
        this.router.navigate(['/staff-login']); // Redirect to login page after successful registration
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Registration Error:', error);
        alert('Registration failed. Please try again.');
      }
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/staff-login']); // Redirect to the staff login page
  }
}