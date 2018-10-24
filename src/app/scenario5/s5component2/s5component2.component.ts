import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s5component2',
  templateUrl: './s5component2.component.html',
  styleUrls: ['./s5component2.component.css']
})
export class S5component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name="";
  @Output() sendToGP =new EventEmitter<string>();
  onReceiving(nameFromChild:string){
    console.log(nameFromChild);
    this.name=nameFromChild;
    this.sendToGP.emit(this.name);
  }

}
