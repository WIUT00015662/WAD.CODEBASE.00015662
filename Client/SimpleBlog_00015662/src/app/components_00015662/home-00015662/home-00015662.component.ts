import { Component, Input, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BlogPost_00015662 } from '../../BlogPost_00015662';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-00015662',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home-00015662.component.html',
  styleUrl: './home-00015662.component.css'
})
export class Home00015662Component {
  blogPostService=inject(ServiceBlogPost00015662Service);
  router = inject(Router);
  blogPosts_00015662: BlogPost_00015662[] = [];

  ngOnInit(){
    this.blogPostService.getAllBlogPosts_00015662().subscribe((result) => {this.blogPosts_00015662 = result});
  }
  displayedColumns: string[] = ['id', 'title', 'content', 'createdAt', 'topic', 'actions'];
  
  EditClicked(blogPost_00015662Id: number) {
    console.log(blogPost_00015662Id, "From Edit");
    this.router.navigateByUrl("/edit/" + blogPost_00015662Id);
  }

  DetailsClicked(blogPost_00015662Id: number) {
    console.log(blogPost_00015662Id, "From Details");
    this.router.navigateByUrl("/details/" + blogPost_00015662Id);
  }

  DeleteClicked(blogPost_00015662Id: number) {
    console.log(blogPost_00015662Id, "From Delete");
    this.router.navigateByUrl("/delete/" + blogPost_00015662Id);
  }
}
