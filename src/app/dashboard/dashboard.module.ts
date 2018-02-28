import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ImageCropperModule } from 'ngx-image-cropper';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule,
    DashboardRoutingModule
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
