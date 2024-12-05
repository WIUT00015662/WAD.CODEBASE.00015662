import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-00015662',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule,
     MatInputModule, MatButtonModule, MatChipsModule],
  templateUrl: './create-00015662.component.html',
  styleUrl: './create-00015662.component.css'
})
export class Create00015662Component {
  blogPostService = inject(ServiceBlogPost00015662Service);

  router = inject(Router);

  // Topic Object
  topic: any;


  // category ID to inject to
  tID: number = 0;

  createBlogPost_00015662: any = {
    title: "",
    content: "",
    topicID: 0
  }


  ngOnInit() {
    this.blogPostService.getAllTopics_00015662().subscribe((result) => {
      this.topic = result
    });
  };

  create() {
    this.createBlogPost_00015662.topicID = this.tID
    console.log(this.createBlogPost_00015662.topicID)
    this.blogPostService.create(this.createBlogPost_00015662).subscribe(result => {
      alert("Item Saved")
      this.router.navigateByUrl("home")
    });
  };


  
}
