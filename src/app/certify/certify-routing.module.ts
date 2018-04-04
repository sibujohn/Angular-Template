import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertifyComponent } from './certify.component';

export const certifyRoutes: Routes = [
  {
    path: ':uploadId',
    component: CertifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(certifyRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CertifyRoutingModule { }
