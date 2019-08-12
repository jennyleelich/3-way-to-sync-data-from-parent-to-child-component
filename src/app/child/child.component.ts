import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostdataService } from '../postdata.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  childMessage = 'child msg testing';
  recievedMsg = 'any message';
  @Output() public postChildMsg: EventEmitter<any> = new EventEmitter();
  constructor(private postDataService: PostdataService) { }

  ngOnInit() {
    this.postDataService.messageSubject.subscribe((msg: any) => {
      this.recievedMsg = msg;
    })
  }
  postMsg() {
    // this.postChildMsg.next(this.childMessage);
    this.postDataService.postMsg(this.childMessage);
  }
}
