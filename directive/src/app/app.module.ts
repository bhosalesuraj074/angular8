import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgstyledirectiveComponent } from './ngstyledirective/ngstyledirective.component';
import { FormsModule } from '@angular/forms';
import { NgifdirectiveComponent } from './ngifdirective/ngifdirective.component';
import { NgforComponent } from './ngfor/ngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    NgstyledirectiveComponent,
    NgifdirectiveComponent,
    NgforComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
