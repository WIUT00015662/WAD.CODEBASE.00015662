import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceTopic00015662Service } from '../../service-topic-00015662.service';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Topic_00015662 } from '../../Topic_00015662';

@Component({
  selector: 'app-create-topic-00015662',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatButtonModule, MatChipsModule],
  templateUrl: './create-topic-00015662.component.html',
  styleUrl: './create-topic-00015662.component.css'
})
export class CreateTopic00015662Component {
  TopicService = inject(ServiceTopic00015662Service);

  router = inject(Router);

  topic_00015662: Topic_00015662 = {
    id: 0,
    title: ""
  }

  ngOnInit() {}

  create() {
    this.TopicService.createTopic(this.topic_00015662).subscribe(result => {
      alert("Topic Saved")
      this.router.navigateByUrl("home")
    });
  };
}
