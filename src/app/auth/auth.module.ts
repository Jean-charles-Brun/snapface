import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/components/login.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule {}
