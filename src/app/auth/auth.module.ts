// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app
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
})
export class AuthModule {}
