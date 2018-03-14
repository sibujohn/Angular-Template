import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { PredictionService } from './prediction.service';
import { PredictionModel }  from './prediction.models';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  public prediction : PredictionModel;

  constructor(private predictionService:PredictionService, private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {    
    this.loadPrediction();
  }

  loadPrediction(): void {  
    const predictionId = this.activatedRoute.snapshot.paramMap.get('predictionId');
    this.predictionService.getPrediction(predictionId)
      .subscribe(prediction => {
        this.prediction = prediction;
        this.prediction.predictionId = predictionId;
      });
  }
  
}
