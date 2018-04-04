export class CertifyModel {
    Vendor: string;
    Country: string;
    Category: string;
    Status: string;
    CertificateNo: KeyValueModel;
    PurchaseOrder: KeyValueModel;
    HeatNo : PredictionKeyValueModel;
    ProductId : PredictionKeyValueModel;
    ProductDescription : PredictionKeyValueModel;
    Edited : boolean;
}
export class KeyValueModel {
    key : string;
    values : string;
}
export class PredictionKeyValueModel {
    key : string;
    values : PredictionValueModel[];
}
export class PredictionValueModel {
    value : string;
}
export class CertifySuggestionModel {
    Vendor: string;
    Country: string;
    Category: string;
    Status: string;
    CertificateNo: PredictionKeySuggestionModel;
    PurchaseOrder: PredictionKeySuggestionModel;
    HeatNo : PredictionKeySuggestionModel;
    ProductId : PredictionKeySuggestionModel;
    ProductDescription : PredictionKeySuggestionModel;
}
export class PredictionKeySuggestionModel {
    key : string;
    suggestions : PredictionSuggestionModel[];
    isOther: boolean;
}
export class PredictionSuggestionModel {
    weightage : string;
    values : string[];
    value : string;
}
export class SelectedSuggestionModel {
    CertificateNo : string;
    PurchaseOrder : string;
    HeatNo : string;
    ProductId : string;
    ProductDescription : string;
}
export class OtherSuggestionModel {
    CertificateNo : string;
    PurchaseOrder : string;
    HeatNo : string;
    ProductId : string;
    ProductDescription : string;
}


export class PredictionSourceModel {
    base64Img : string;
}