import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';

@Component({
  selector: 'app-root',
  imports: [PrincipalComponent], //RouterOutlet,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwa-reviews-livros';
}
