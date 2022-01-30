import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
// import { CharacterOnlyDirective } from "./login/directives/CharacterOnlyDirective";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    BrowserAnimationsModule,
    MatInputModule
    // CharacterOnlyDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
