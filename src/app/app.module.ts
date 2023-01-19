import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
//import{ MatDialogModule} from '@angular/material/dialog';
//import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
//import { MatDialogModule ,MatDialogRef} from '@angular/material/dialog';
@NgModule({
 schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  declarations: [
 
    
    AppComponent,
    routingComponents ,
    AddComponent,
    GetComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
