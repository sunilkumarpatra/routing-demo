import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // Import provideRouter
import { routes } from './app/app-routing.module'; // Import your routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide the router configuration
  ]
}).catch(err => console.error(err));