import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { PostdataService } from '../postdata.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  public parentMsg = 'message from parent';
  @ViewChild('app-child', {static: false}) child: ChildComponent;
  constructor(private postdataService: PostdataService) { }

  ngOnInit() {
    this.postdataService.messageSubject.subscribe((msg: any) => this.parentMsg = msg);
  }
  ngAfterViewInit() {
   // this.parentMsg = this.child.childMessage;
  }
  getMsg(event: any) {
    this.parentMsg = event;
  }
}
