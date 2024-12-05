import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navigation-00015662',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './navigation-00015662.component.html',
  styleUrl: './navigation-00015662.component.css'
})
export class Navigation00015662Component {
  router = inject(Router);
  CreateClicked() {
    console.log("From Create");
    this.router.navigateByUrl("create")
  }

  onHomeIconClicked() {
    this.router.navigateByUrl("home")
  }
}
