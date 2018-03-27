import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpRequestService } from '../shared-services/http-request.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
      
  ],
  exports: [
      
  ],
  providers: [
    HttpRequestService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HttpRequestModule { }
