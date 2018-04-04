import { Component, OnInit} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router} from '@angular/router';

import { DashboardService } from './dashboard.service';
import { PredictionModel } from './dashboard.models';

const uploadUrl = 'path_to_api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  
  public uploader:FileUploader = new FileUploader({url: uploadUrl});
  public predictionResults : PredictionModel[] = [];

  constructor(private dashboardService : DashboardService, private router:Router) {

  }

  ngOnInit() {
    this.loadPredictionResults();
  }
  
  loadPredictionResults() : void {
    this.dashboardService.getPredictionResults()
    .subscribe(predictions => this.predictionResults = predictions);
  }

  predictionDetails(prediction : PredictionModel):void {
    this.router.navigate(['home/prediction/'+prediction.UploadId]);
  }

}
