import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s4child',
  templateUrl: './s4child.component.html',
  styleUrls: ['./s4child.component.css']
})
export class S4childComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name="";
  @Output() sendToParent =new EventEmitter<string>();
  display(){
    this.sendToParent.emit(this.name);
  }
}
