import { Component, OnInit, inject } from '@angular/core';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost_00015662 } from '../../BlogPost_00015662';


function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((entity) => entity.id === indexToFind);
}
@Component({
  selector: 'app-edit-00015662',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatButtonModule
  ],
  templateUrl: './edit-00015662.component.html',
  styleUrl: './edit-00015662.component.css'
})
export class Edit00015662Component {
  blogPostService = inject(ServiceBlogPost00015662Service);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editBlogPost_00015662: BlogPost_00015662 = {
    id: 0,
    title: "",
    content: "",
    topicID: 0,
    createdAt: "",
    topic: {
      id:0,
      title:""
    }
  };
  topicObject : any;
  selected: any;
  tID: number = 0;
  ngOnInit() {
    this.blogPostService.getById(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editBlogPost_00015662 = result;
      this.selected = this.editBlogPost_00015662.topicID;
    });
    this.blogPostService.getAllTopics_00015662().subscribe((result) => {
      this.topicObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home")
  }

  edit() {
    this.editBlogPost_00015662.topicID = this.tID;
    this.blogPostService.edit(this.editBlogPost_00015662).subscribe(result => {
      alert("Changes has been updated")
      this.router.navigateByUrl("home");
    })
  }
}
