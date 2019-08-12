import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  childMessage = 'child msg testing';
  @Output() public postChildMsg: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  postMsg() {
    this.postChildMsg.next(this.childMessage);
  }
}
