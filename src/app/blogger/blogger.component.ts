import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { PostdataService } from '../postdata.service';


@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.scss']
})
export class BloggerComponent implements OnInit {
  public blogger = 'Jecelyn';
  public posts: Post[];

  constructor(private postdataService: PostdataService) { }

  ngOnInit() {
    this.postdataService.getPostsByBlogger()
    .subscribe(response => this.posts = response);
  }

}
