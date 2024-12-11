import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  paymentData = {
    bookingId: '',
    amount: null,
    customerEmail: localStorage.getItem('email'), // Pre-populated from localStorage
    paymentMethod: 'Paypal', // Default selection
    details: {
      paypalID: '',
      cardNumber: '',
      cardName: '',
      cvv: '',
      expiry: ''
    }
  };

  isLoading = false; // For loading spinner
  errorMessage: string = ''; // Error message
  successMessage: string = ''; // Success message

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;
  
    const url = 'http://localhost:8080/customer/pay';
  
    // Validate required fields
    if (!this.paymentData.bookingId || !this.paymentData.amount || !this.paymentData.paymentMethod) {
      this.errorMessage = 'Please fill all required fields.';
      this.isLoading = false;
      return;
    }
  
    // Retrieve JWT token from localStorage
    const jwtToken = localStorage.getItem('jwt');
    if (!jwtToken) {
      this.errorMessage = 'Unauthorized: Please log in first.';
      this.isLoading = false;
      return;
    }
  
    // Prepare Authorization header
    const headers = {
      Authorization: `Bearer ${jwtToken}`
    };
  
    // Prepare request payload
    const payload = {
      bookingId: this.paymentData.bookingId,
      amount: this.paymentData.amount,
      customerEmail: this.paymentData.customerEmail,
      paymentMethod: this.paymentData.paymentMethod,
      details: {}
    };
  
    if (this.paymentData.paymentMethod === 'Paypal') {
      if (!this.paymentData.details.paypalID) {
        this.errorMessage = 'Please provide your PayPal ID.';
        this.isLoading = false;
        return;
      }
      payload.details = { paypalID: this.paymentData.details.paypalID };
    } else if (this.paymentData.paymentMethod === 'Card') {
      const { cardNumber, cardName, cvv, expiry } = this.paymentData.details;
      if (!cardNumber || !cardName || !cvv || !expiry) {
        this.errorMessage = 'Please fill all card details.';
        this.isLoading = false;
        return;
      }
      payload.details = { cardNumber, cardName, cvv, expiry };
    }
  
    // Send API request with headers
    this.http.post(url, payload, { headers }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = response.message;
        console.log('Payment successful:', response);
      },
      error: (error) => {
        console.error('Payment Error:', error);
        this.isLoading = false;
        this.errorMessage = 'Payment failed. Please try again.';
      }
    });
  }
}