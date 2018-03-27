import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import { HttpRequestService } from '../globals/shared-services/http-request.service';

import { CertifyModel, PredictionSourceModel, CertifySuggestionModel } from './certify.models';

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
    this.getSuggestionValueByKey('HeatNo', suggestionObj);
    this.getSuggestionValueByKey('ProductId', suggestionObj);
    this.getSuggestionValueByKey('ProductDescription', suggestionObj);
    return suggestionObj;
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
