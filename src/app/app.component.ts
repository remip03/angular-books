import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarreComponent } from './commons/navbarre/navbarre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Books';
}
