import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PredictionModel } from './prediction.models';

const PREDICTION : PredictionModel = {
  predictionId: '1',
  name : 'Hello'
}

@Injectable()
export class PredictionService {

  private predictionUrl = '/predictions';

  constructor() {
    
  }

  /** GET predictions from the server */
  getPrediction (predictionId : string): Observable<PredictionModel> {
    // return this.http.get<PredictionModel>(this.predictionUrl)
    return Observable.of(PREDICTION);
  }
}
