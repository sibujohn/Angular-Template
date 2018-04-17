import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafePipe
  ],
  exports: [SafePipe],
  providers: [
      
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SafePipeModule { }
