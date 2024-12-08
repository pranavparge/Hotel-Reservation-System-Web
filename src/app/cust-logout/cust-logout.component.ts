import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-logout',
  templateUrl: './cust-logout.component.html',
  styleUrls: ['./cust-logout.component.css']
})
export class CustLogoutComponent {
  constructor(private http: HttpClient, private router: Router) {}

  logout(): void {
    // alert('Logged out successfully.');
    const jwtToken = localStorage.getItem('jwt');

    if (!jwtToken) {
      this.redirectToLogin('You are not logged in.');
      return;
    }

    const headers = new HttpHeaders({ Authorization: `Bearer ${jwtToken}` });

    this.http.post('http://localhost:8080/auth/customer/log-out', {}, { headers }).subscribe({
      next: () => this.handleLogoutSuccess(),
      error: () => this.handleLogoutError()
    });
  }

  private handleLogoutSuccess(): void {
    localStorage.clear(); // Clear all local storage keys
    alert('Logged out successfully!');
    this.router.navigate(['/cust-login']);
    this.redirectToLogin('Logged out successfully.');
  }

  private handleLogoutError(): void {
    //to check
    this.router.navigate(['/cust-login']);
    // this.redirectToLogin('Failed to log out. Please try again.');
  }

  private redirectToLogin(message: string): void {
    alert('Logged out successfully!');
    this.router.navigate(['/cust-login']);
  }
}