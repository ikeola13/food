import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './route';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
