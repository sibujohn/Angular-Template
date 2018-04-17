import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';

import { CertifyRoutingModule } from './certify-routing.module';
import { CertifyComponent } from './certify.component';
import { CertifyService } from './certify.service';

import { HttpRequestModule } from '../globals/common-modules/http-request.module';
import { SafePipeModule } from '../globals/common-modules/safe-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImageCropperModule,
    CertifyRoutingModule,
    HttpRequestModule,
    SafePipeModule
  ],
  declarations: [
    CertifyComponent
  ],
  providers: [
    CertifyService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CertifyModule { }
