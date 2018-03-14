import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileUploadModule } from 'ng2-file-upload';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    ImageCropperModule,
    FileUploadModule,
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
