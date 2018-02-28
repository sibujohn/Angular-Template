import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
