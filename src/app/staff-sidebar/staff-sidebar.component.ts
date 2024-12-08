import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-sidebar',
  templateUrl: './staff-sidebar.component.html',
  styleUrls: ['./staff-sidebar.component.css']
})
export class StaffSidebarComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}