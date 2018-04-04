import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import { HttpRequestService } from '../globals/shared-services/http-request.service';

import { CertifyModel, PredictionSourceModel, CertifySuggestionModel, SelectedSuggestionModel, OtherSuggestionModel } from './certify.models';

@Injectable()
export class CertifyService {

  private certifyUrl = '/getPredictionById';
  private predictionImgUrl = '/getPredictionSourceImg';
  private certifyPredictionUrl = '/postCertifiedPrediction';
  private certifySuggestionUrl = '/getCertifySuggestionsById';

  constructor(private http : HttpRequestService) {
    
  }

  /** GET predictions from the server */
  getPrediction (predictionId : string): Observable<CertifyModel> {
    return this.http.getRequest(this.certifyUrl);
  }

  /** GET prediction source image from the server as base64*/
  getPredictionSourceImg (predictionId : string): Observable<PredictionSourceModel> {
    return this.http.getRequest(this.predictionImgUrl);
  }

  /** POST certified prediction to the server*/
  postCertifiedPrediction (certifiedPrediction : CertifyModel): Observable<boolean> {
    return this.http.postRequest(this.certifyPredictionUrl, certifiedPrediction);
  }

  /** GET certify suggestions from the server*/
  gettCertifySuggestions (predictionId : string): Observable<CertifySuggestionModel> {
    return this.http.getRequest(this.certifySuggestionUrl);
  }

  generateSuggestionValue(suggestionObj : CertifySuggestionModel) : CertifySuggestionModel{
    this.getSuggestionValueByKey('CertificateNo', suggestionObj);
    this.getSuggestionValueByKey('PurchaseOrder', suggestionObj);
    this.getSuggestionValueByKey('HeatNo', suggestionObj);
    this.getSuggestionValueByKey('ProductId', suggestionObj);
    this.getSuggestionValueByKey('ProductDescription', suggestionObj);
    return suggestionObj;
  }

  generateSelectionValue(certifyObj : CertifyModel, selectedValues : SelectedSuggestionModel):SelectedSuggestionModel{
    selectedValues = {
      CertificateNo : '',
      PurchaseOrder : '',
      HeatNo : '',
      ProductId : '',
      ProductDescription:''
    };
    this.setSelectionValuesByKey('CertificateNo', certifyObj, selectedValues);
    this.setSelectionValuesByKey('PurchaseOrder', certifyObj, selectedValues);
    this.setSelectionValuesByKey('HeatNo', certifyObj, selectedValues);
    this.setSelectionValuesByKey('ProductId', certifyObj, selectedValues);
    this.setSelectionValuesByKey('ProductDescription', certifyObj, selectedValues);
    return selectedValues;
  }

  generatetEditedCertifyValues(certify: CertifyModel,  suggestion : CertifySuggestionModel, selectedValues : SelectedSuggestionModel, otherValues : OtherSuggestionModel):CertifyModel{
    this.setEditedCertifyFromSuggestions('CertificateNo', certify, suggestion, selectedValues, otherValues);
    this.setEditedCertifyFromSuggestions('PurchaseOrder', certify, suggestion, selectedValues, otherValues);
    this.setEditedCertifyFromSuggestions('HeatNo', certify, suggestion, selectedValues, otherValues);
    this.setEditedCertifyFromSuggestions('ProductId', certify, suggestion, selectedValues, otherValues);
    this.setEditedCertifyFromSuggestions('ProductDescription', certify, suggestion, selectedValues, otherValues);
    return certify;
  }

  getSuggestionValueByKey(key: string, suggestionObj : CertifySuggestionModel) : CertifySuggestionModel{    
    for(var i=0; i<suggestionObj[key].suggestions.length; i++){
      suggestionObj[key].suggestions[i].value = '';
      for(var j=0; j<suggestionObj[key].suggestions[i].values.length; j++){
        suggestionObj[key].suggestions[i].value += suggestionObj[key].suggestions[i].values[j]+'  ';
      }
      console.log(suggestionObj[key].suggestions[i]);
    }
    suggestionObj[key].suggestions[suggestionObj[key].suggestions.length] = {
      weightage : -1,
      value : 'Other',
      values : []
    };
    return suggestionObj;
  }

  setSelectionValuesByKey(key: string, certifyObj : CertifyModel, selectedValues: SelectedSuggestionModel) : SelectedSuggestionModel{    
    selectedValues[key] = '';
    if(certifyObj[key].value){
      selectedValues[key] = certifyObj[key].value+'  ';
    }
    else if(certifyObj[key].values){
      for(var i=0; i<certifyObj[key].values.length; i++){
        selectedValues[key] = selectedValues[key] += certifyObj[key].values[i].value+'  ';
      }
    }
    return selectedValues;
  }  

  setEditedCertifyFromSuggestions(key: string, certify: CertifyModel,  suggestion : CertifySuggestionModel, selectedValues : SelectedSuggestionModel, otherValues : OtherSuggestionModel):CertifyModel{
    if(suggestion[key].isOther){
      if(certify[key].value){
        certify[key].value = "";
        let otherValue = otherValues[key].trim();
        certify[key].value = otherValue;
      }
      else if(certify[key].values){
        certify[key].values = [];
        let otherValue = otherValues[key].trim().split(' ');
        for(let i=0; i<otherValue.length; i++){
          if(otherValue[i].length>0){
            certify[key].values.push({
              value : otherValue[i]
            });
          }
        }
      }
    }
    else{
      if(certify[key].value){
        certify[key].value = selectedValues[key].trim();
      }
      else if(certify[key].values){
        certify[key].values = selectedValues[key].trim().split('  ').map(function(entry) { 
          return {
            value : entry
          };
        });
      }
    }
    return certify;
  }

  convertToDataURLviaCanvas(url: string){
    return new Promise( (resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function(){
        let canvas = <HTMLCanvasElement> document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        dataURL;
        canvas.height = 500;
        canvas.width = 300;
        ctx.drawImage(img, 0, 0, 300, 500);
        dataURL = canvas.toDataURL("image/png");
        resolve(dataURL); 
      };
      img.src = url;
    });
  }
}
