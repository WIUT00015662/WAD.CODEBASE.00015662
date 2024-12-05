import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceTopic00015662Service } from '../../service-topic-00015662.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-delete-topic-00015662',
  standalone: true,
  imports: [ MatButtonModule],
  templateUrl: './delete-topic-00015662.component.html',
  styleUrl: './delete-topic-00015662.component.css'
})
export class DeleteTopic00015662Component {

  topicService = inject(ServiceTopic00015662Service);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  topicId_00015662: number;

  constructor() {
    this.topicId_00015662 = + this.activatedRoute.snapshot.params['id'];
  }
  delete() {
    this.topicService.deleteTopic(this.topicId_00015662).subscribe({
      next: () => {
        alert('Topic deleted successfully!');
        this.router.navigateByUrl("home")
      },
      error: (err) => {
        console.error("Error deleting the topic", err);
        alert("Failed to delete the topic");
      }
    });
  }

  cancel() {
    this.router.navigateByUrl("home")
  }
}
