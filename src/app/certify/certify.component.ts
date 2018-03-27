import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { CertifyService } from './certify.service';
import { CertifyModel, PredictionSourceModel, CertifySuggestionModel }  from './certify.models';

@Component({
  selector: 'app-certify',
  templateUrl: './certify.component.html',
  styleUrls: ['./certify.component.css']
})
export class CertifyComponent implements OnInit {

  // public croppedImage: any;
  public certifyId : string;  
  public certifyObj : CertifyModel;  
  public suggestionObj : CertifySuggestionModel;  
  public imageBase64: PredictionSourceModel;
  public certifyObjEditMode : boolean = false;

  constructor(private certifyService:CertifyService, private router:Router, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit() {    
    this.loadPrediction();
  }
  
  // imageCropped(image: string) {
  //   this.croppedImage = image;
  //   console.log(this.croppedImage)
  // }

  loadPrediction(): void {  
    this.certifyId = this.activatedRoute.snapshot.paramMap.get('certifyId');
    this.certifyService.getPredictionSourceImg(this.certifyId)
      .subscribe(base64Img => {
        this.imageBase64 = base64Img;
      });
    this.certifyService.getPrediction(this.certifyId)
      .subscribe(certifyObj => {
        this.certifyObj = certifyObj;
      });
  }

  certifyApprove():void{
    this.certifyService.postCertifiedPrediction(this.certifyObj)
      .subscribe(certifyStatus => {
        this.router.navigate(['home/dashboard']);
      });
  }

  certifyReject():void{
    this.certifyService.gettCertifySuggestions(this.certifyId)
      .subscribe(certifySuggestions => {
        this.suggestionObj = certifySuggestions;
        this.certifyService.generateSuggestionValue(this.suggestionObj);
        this.certifyObjEditMode = true;
      });
  }
  
}