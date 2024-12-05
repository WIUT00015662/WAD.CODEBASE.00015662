import { Component, inject } from '@angular/core';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { BlogPost_00015662 } from '../../BlogPost_00015662';


@Component({
  selector: 'app-details-00015662',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details-00015662.component.html',
  styleUrl: './details-00015662.component.css'
})
export class Details00015662Component {

  detailsBlogPost_00015662: BlogPost_00015662 = {
    id: 0,
    title: "",
    content: "",
    topicID: 0,
    createdAt: "",
    topic: {
      id:0,
      title:""
    }
  }

  serviceBlogPost = inject(ServiceBlogPost00015662Service)

  activatedRoute = inject(ActivatedRoute)

  ngOnInit() {

    this.serviceBlogPost.getById(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem) => {
      this.detailsBlogPost_00015662 = resultedItem
    });
  }
}
