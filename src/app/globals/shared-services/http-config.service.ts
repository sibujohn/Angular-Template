import { Injectable } from '@angular/core';

@Injectable()
export class HttpConfigService {

    readonly baseUrl : string = "https://private-96ffbf-angular2sampleapi.apiary-mock.com/";
    
    readonly loginUrl : string = 'login';
    
    readonly predictionUrl = 'getPredictions';
    readonly uploadUrl = 'mtr/pdf/upload';
    readonly uploadSrc = 'mtr/pdf/download/';

    readonly certifyUrl = 'getPredictionById';
    readonly certifyPredictionUrl = 'postCertifiedPrediction';
    readonly certifySuggestionUrl = 'getCertifySuggestionsById';

    

    constructor() { }

}