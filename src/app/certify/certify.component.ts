import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { CertifyService } from './certify.service';
import { CertifyModel, PredictionSourceModel, CertifySuggestionModel, SelectedSuggestionModel, OtherSuggestionModel }  from './certify.models';

@Component({
  selector: 'app-certify',
  templateUrl: './certify.component.html',
  styleUrls: ['./certify.component.css']
})
export class CertifyComponent implements OnInit {

  // public croppedImage: any;
  public uploadId : string;  
  public certifyObj : CertifyModel;  
  public suggestionObj : CertifySuggestionModel;  
  public imageBase64: PredictionSourceModel;
  public certifyObjEditMode : boolean = false;
  public selectedValues : SelectedSuggestionModel;
  public otherValues : OtherSuggestionModel;

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
    this.uploadId = this.activatedRoute.snapshot.paramMap.get('uploadId');
    this.certifyService.getPredictionSourceImg(this.uploadId)
      .subscribe(base64Img => {
        this.imageBase64 = base64Img;
      });
    this.certifyService.getPrediction(this.uploadId)
      .subscribe(certifyObj => {
        this.certifyObj = certifyObj;
      });
  }

  onSuggestionChange(key):void{
    if(this.selectedValues[key] === 'Other'){
      this.suggestionObj[key].isOther = true;
    }
    else{
      this.suggestionObj[key].isOther = false;
    }
    this.otherValues[key] = '';
  }

  certifyApprove():void{
    if(this.certifyObjEditMode){
      this.certifyService.generatetEditedCertifyValues(this.certifyObj, this.suggestionObj, this.selectedValues, this.otherValues);
      this.certifyObj.Edited = true;
    }
    else{
      this.certifyObj.Edited = false;
    }
    this.certifyService.postCertifiedPrediction(this.certifyObj)
      .subscribe(certifyStatus => {
        this.router.navigate(['home/dashboard']);
      });
  }

  certifyEdit():void{
    this.certifyService.gettCertifySuggestions(this.uploadId)
      .subscribe(certifySuggestions => {
        this.suggestionObj = certifySuggestions;
        this.suggestionObj = this.certifyService.generateSuggestionValue(this.suggestionObj);
        this.selectedValues = this.certifyService.generateSelectionValue(this.certifyObj, this.selectedValues);
        this.reserOtherValues();
        this.certifyObjEditMode = true;
      });
  }

  reserOtherValues():void{
    this.otherValues = { CertificateNo: '', PurchaseOrder: '', HeatNo:'', ProductId : '', ProductDescription : ''};
  }

  resetOtherOptions():void{
    if(this.suggestionObj){
      this.suggestionObj.CertificateNo.isOther = false;
      this.suggestionObj.PurchaseOrder.isOther = false;
      this.suggestionObj.HeatNo.isOther = false;
      this.suggestionObj.ProductId.isOther = false;
      this.suggestionObj.ProductDescription.isOther = false;
    }
  }

  certifyCancel():void{
    this.certifyObjEditMode = false;
    this.reserOtherValues();
    this.resetOtherOptions();
  }
  
}