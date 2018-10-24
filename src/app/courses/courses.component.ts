import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  
  constructor() { 
  }
  name= "";
  onKey(){
    console.log(this.name);
  }
  ngOnInit(){

  }


}
