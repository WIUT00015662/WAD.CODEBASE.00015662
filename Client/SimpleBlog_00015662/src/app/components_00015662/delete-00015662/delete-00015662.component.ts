import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceBlogPost00015662Service } from '../../service-blog-post-00015662.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-delete-00015662',
  standalone: true,
  imports: [ MatButtonModule],
  templateUrl: './delete-00015662.component.html',
  styleUrl: './delete-00015662.component.css'
})
export class Delete00015662Component {
  blogPostService = inject(ServiceBlogPost00015662Service);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  blogPostId_00015662: number;

  constructor() {
    this.blogPostId_00015662 = + this.activatedRoute.snapshot.params['id'];
  }

  delete() {
    this.blogPostService.delete(this.blogPostId_00015662).subscribe({
      next: () => {
        alert('Blog post deleted successfully!');
        this.router.navigateByUrl("home")
      },
      error: (err) => {
        console.error("Error deleting the post", err);
        alert("Failed to delete the blog post");
      }
    });
  }

  cancel() {
    this.router.navigateByUrl("home")
  }
}
