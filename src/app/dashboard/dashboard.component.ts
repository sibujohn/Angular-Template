import { Component, OnInit} from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { Router} from '@angular/router';

import { DashboardService } from './dashboard.service';
import { PredictionModel } from './dashboard.models';
import { HttpConfigService } from '../globals/shared-services/http-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  
  public uploader:FileUploader = new FileUploader({url: this.httpConfigService.uploadUrl});
  public predictionResults : PredictionModel[] = [];

  constructor(private dashboardService : DashboardService, private router:Router, private httpConfigService : HttpConfigService) {

  }

  ngOnInit() {
    this.loadPredictionResults();
    this.uploader.onBuildItemForm = (fileItem, form) => {
      form.append('filename', fileItem.file.name);
      return {fileItem, form};
    };
    this.uploader.onCompleteAll = () => {
      setTimeout (() => {
        this.uploader.clearQueue();
        this.uploader.progress = 0;
        this.loadPredictionResults();
      }, 1500);
    }
  }
  
  loadPredictionResults() : void {
    this.dashboardService.getPredictionResults()
    .subscribe(predictions => this.predictionResults = predictions);
  }

  predictionDetails(prediction : PredictionModel):void {
    this.router.navigate(['home/prediction/'+prediction.FileName]);
  }

}
