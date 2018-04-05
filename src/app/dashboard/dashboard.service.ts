import { Injectable } from '@angular/core';
import { HttpRequestService } from '../globals/shared-services/http-request.service';
import { HttpConfigService } from '../globals/shared-services/http-config.service';

import { PredictionModel } from './dashboard.models';

@Injectable()
export class DashboardService {

  constructor(private http :HttpRequestService, private httpConfigService : HttpConfigService) {
    
  }
  /** GET predictions from the server */
  getPredictionResults (): any {
    return this.http.getRequest(this.httpConfigService.predictionUrl);
  }
}
