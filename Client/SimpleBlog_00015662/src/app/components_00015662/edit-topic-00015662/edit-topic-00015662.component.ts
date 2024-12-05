import { Component, OnInit, inject } from '@angular/core';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost_00015662 } from '../../BlogPost_00015662';
import { ServiceTopic00015662Service } from '../../service-topic-00015662.service';
import { Topic_00015662 } from '../../Topic_00015662';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((entity) => entity.id === indexToFind);
}
@Component({
  selector: 'app-edit-topic-00015662',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatButtonModule],
  templateUrl: './edit-topic-00015662.component.html',
  styleUrl: './edit-topic-00015662.component.css'
})
export class EditTopic00015662Component {
  TopicService = inject(ServiceTopic00015662Service);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editTopic_00015662: Topic_00015662 = {
    id: 0,
    title: ""
  }

  ngOnInit() {
    this.TopicService.getTopicById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editTopic_00015662 = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home")
  }

  edit() {
    this.TopicService.editTopic(this.editTopic_00015662).subscribe(result => {
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    });
  }
}

