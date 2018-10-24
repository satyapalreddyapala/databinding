import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s6componenet2',
  templateUrl: './s6componenet2.component.html',
  styleUrls: ['./s6componenet2.component.css']
})
export class S6componenet2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name="";
  @Output() sendToParent =new EventEmitter<string>();
  display(){
    this.sendToParent.emit(this.name);
  }

}
