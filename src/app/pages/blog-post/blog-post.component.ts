import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blog;
  id;
  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.blog = blogService.blogs.find(blog => blog.id === this.id);
    console.log(this.blog);
   }

  ngOnInit() {
  }

}
