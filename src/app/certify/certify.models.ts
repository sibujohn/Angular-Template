export class CertifyModel {
    CertificateNo: string;
    CertifyStatus: string;
    Vendor: string;
    Country: string;
    PurchaseOrder: string;
    HeatNo : PredictionKeyValueModel;
    ProductId : PredictionKeyValueModel;
    ProductDescription : PredictionKeyValueModel;
}
export class PredictionKeyValueModel {
    key : string;
    values : PredictionValueModel[];
}
export class PredictionValueModel {
    value : string;
}
export class PredictionSourceModel {
    base64Img : string;
}
export class CertifySuggestionModel {
    CertificateNo: string;
    CertifyStatus: string;
    Vendor: string;
    Country: string;
    PurchaseOrder: string;
    HeatNo : PredictionKeySuggestionModel;
    ProductId : PredictionKeySuggestionModel;
    ProductDescription : PredictionKeySuggestionModel;
}
export class PredictionKeySuggestionModel {
    key : string;
    suggestions : PredictionSuggestionModel[];
}
export class PredictionSuggestionModel {
    weightage : string;
    values : string[];
    value : string;
}
