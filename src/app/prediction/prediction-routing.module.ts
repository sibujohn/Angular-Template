import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictionComponent } from './prediction.component';

export const predictionRoutes: Routes = [
  {
    path: ':predictionId',
    component: PredictionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(predictionRoutes)],
  exports: [RouterModule],
  providers: []
})
export class PredictionRoutingModule { }
