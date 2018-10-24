import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentnode',
  templateUrl: './parentnode.component.html',
  styleUrls: ['./parentnode.component.css']
})
export class ParentnodeComponent implements OnInit {

  constructor() { }
  name="";
  onpress(){
    console.log(this.name);
  }
  ngOnInit() {
  }
  
}
