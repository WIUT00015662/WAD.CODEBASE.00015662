import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation00015662Component } from './components_00015662/navigation-00015662/navigation-00015662.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation00015662Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
