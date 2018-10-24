import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s5component3',
  templateUrl: './s5component3.component.html',
  styleUrls: ['./s5component3.component.css']
})
export class S5component3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name="";
  @Output() sendToParent =new EventEmitter<string>();
  display(){
    this.sendToParent.emit(this.name);
  }
}
