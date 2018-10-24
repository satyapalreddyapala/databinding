import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s6componenet1',
  templateUrl: './s6componenet1.component.html',
  styleUrls: ['./s6componenet1.component.css']
})
export class S6componenet1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public name:string;
  onReceiving(nameFromChild:string){
    this.name=nameFromChild;
  }

}
