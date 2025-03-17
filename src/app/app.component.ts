import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf, *ngFor, etc.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
}