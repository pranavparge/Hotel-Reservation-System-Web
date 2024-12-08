import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-register',
  templateUrl: './cust-register.component.html',
  styleUrls: ['./cust-register.component.css']
})
export class CustRegisterComponent {
  registrationData = {
    email: '',
    name: '',
    password: '',
    programType: 'MEMBER' // Default value
  };
  programTypes = ['MEMBER', 'LOYALTY']; // Program type options
  isLoading = false; // For loading spinner

  constructor(private http: HttpClient, private router: Router) {}

  onRegister(): void {
    this.isLoading = true;

    this.http.post('http://localhost:8080/auth/customer/sign-up', this.registrationData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        alert(`Registration Successful! 
        Customer ID: ${response.customerId}
        Program Type: ${response.programType}
        Email: ${response.email}
        Name: ${response.name}`);
        this.navigateToLogin();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Registration Error:', error);
        alert('Registration failed. Please try again.');
      }
    });
  }

  navigateToLogin(): void {
    this.router.navigate(['/cust-login']); // Redirect to login page
  }
}