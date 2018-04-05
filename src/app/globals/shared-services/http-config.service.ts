import { Injectable } from '@angular/core';

@Injectable()
export class HttpConfigService {

    public baseUrl : string = "https://private-96ffbf-angular2sampleapi.apiary-mock.com";
    
    public loginUrl : string = '/login';
    
    public predictionUrl = '/getPredictions';
    
    public certifyUrl = '/getPredictionById';
    public predictionImgUrl = '/getPredictionSourceImg';
    public certifyPredictionUrl = '/postCertifiedPrediction';
    public certifySuggestionUrl = '/getCertifySuggestionsById';

    

    constructor() { }

}