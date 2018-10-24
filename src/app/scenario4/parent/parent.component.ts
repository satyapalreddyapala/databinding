import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name="";
  onReceiving(nameFromChild:string){
    console.log(nameFromChild);
    this.name=nameFromChild;
  }

}
