import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PredictionRoutingModule } from './prediction-routing.module';
import { PredictionComponent } from './prediction.component';
import { PredictionService } from './prediction.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PredictionRoutingModule
  ],
  declarations: [
    PredictionComponent
  ],
  providers: [
    PredictionService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PredictionModule { }
