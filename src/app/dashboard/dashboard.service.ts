import { Injectable } from '@angular/core';
import { HttpRequestService } from '../globals/shared-services/http-request.service';

import { PredictionModel } from './dashboard.models';

@Injectable()
export class DashboardService {

  private predictionUrl = '/getPredictions';

  constructor(private http :HttpRequestService) {
    
  }
  /** GET predictions from the server */
  getPredictionResults (): any {
    return this.http.getRequest(this.predictionUrl);
  }
}
