import { Component, inject } from '@angular/core';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { BlogPost_00015662 } from '../../BlogPost_00015662';
import { Topic_00015662 } from '../../Topic_00015662';
import { ServiceTopic00015662Service } from '../../service-topic-00015662.service';
@Component({
  selector: 'app-details-topic-00015662',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details-topic-00015662.component.html',
  styleUrl: './details-topic-00015662.component.css'
})
export class DetailsTopic00015662Component {
  detailsTopic_00015662: Topic_00015662 = {
    id: 0,
    title: ""
  }

  serviceTopic = inject(ServiceTopic00015662Service);

  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    this.serviceTopic.getTopicById(this.activatedRoute.snapshot.params["id"]).subscribe((result) => {
      this.detailsTopic_00015662 = result
    });
  }
}
