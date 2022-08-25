// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app
import { AuthApi } from './Api';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [ContainerComponent, LoginComponent, RegisterComponent],
  imports: [
    // angular
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

    // auth
    AuthRoutingModule,
  ],
  providers: [AuthApi],
})
export class AuthModule {}
