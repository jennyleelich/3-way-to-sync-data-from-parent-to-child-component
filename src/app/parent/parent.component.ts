import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public parentMsg = 'message from parent';
  constructor() { }

  ngOnInit() {
  }
  getMsg(event: any) {
    this.parentMsg = event;
  }
}
