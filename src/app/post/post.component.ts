import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post, GroupPosts } from '../post.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {
  private _postData = new BehaviorSubject<Post[]>([]);

  // @Input() data: Post[];
  @Input() set data(value) {
    this._postData.next(value);
  }
  get data() {
    return this._postData.getValue();
  }
  public groupPosts: GroupPosts[];
  constructor() { }

  ngOnInit() {
    this._postData
      .subscribe(x => {
        this.groupPosts = this.groupByCategory(x);
      });
   // this.groupPosts = this.groupByCategory(this.data);
  }
  ngOnChanges(changes: SimpleChanges) {
    // if (changes.data) {
    //   this.groupPosts = this.groupByCategory(this.data);
    // }

  }

  public groupByCategory(data: Post[]): GroupPosts[] {
    if (!data) { return; }
    const categories = new Set(data.map(x => x.type));
    const result = Array.from(categories).map(x => ({
        category: x,
        posts: data.filter(post => post.type === x)
    }));

    return result;
  }

}
