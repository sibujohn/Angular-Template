import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FileUploadModule } from 'ng2-file-upload';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

import { HttpRequestModule } from '../globals/common-modules/http-request.module';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    DashboardRoutingModule,
    HttpRequestModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
