import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginFormComponent]
})
export class LoginModule { }