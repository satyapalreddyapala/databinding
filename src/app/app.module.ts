import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentnodeComponent } from './scenario3/parentnode/parentnode.component';
import { ChildComponent } from './scenario3/child/child.component';
import { ParentComponent } from './scenario4/parent/parent.component';
import { S4childComponent } from './scenario4/s4child/s4child.component';
import { S5childComponent } from './scenario5/s5child/s5child.component';
import { S5parentComponent } from './scenario5/s5parent/s5parent.component';
import { S5grandparentComponent } from './scenario5/s5grandparent/s5grandparent.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ParentnodeComponent,
    ChildComponent,
    ParentComponent,
    S4childComponent,
    S5childComponent,
    S5parentComponent,
    S5grandparentComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
