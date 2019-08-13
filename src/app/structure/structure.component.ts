import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
  items = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {name: 'jenny', address: '123', flag: true},
      {name: 'hubert', address: '234', flag: false},
      {name: 'amy', address: '345', flag: true}
    ]
  }

}
