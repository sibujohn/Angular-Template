import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PredictionModel } from './dashboard.models';

const PREDICTIONS : PredictionModel[] = [
  {
    predictionId: '1',
    fileName: 'Test.pdf',
    fileType: 'pdf',
    fileSize: '2MB',
    predictionStatus: 'Predicting'
  },
  {
    predictionId: '2',
    fileName: 'Test.pdf',
    fileType: 'pdf',
    fileSize: '1MB',
    predictionStatus: 'Certiied'
  }
];

@Injectable()
export class DashboardService {

  private predictionUrl = '/predictions';

  constructor(private http: HttpClient) {
    
  }
  /** GET predictions from the server */
  getPredictionResults (): Observable<PredictionModel[]> {
    // return this.http.get<PredictionModel[]>(this.predictionUrl)
    return Observable.of(PREDICTIONS);
  }
}
