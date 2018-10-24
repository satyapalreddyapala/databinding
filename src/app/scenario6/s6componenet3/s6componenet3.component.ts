import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-s6componenet3',
  templateUrl: './s6componenet3.component.html',
  styleUrls: ['./s6componenet3.component.css']
})
export class S6componenet3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('data') nameFromSibling:string;
}
