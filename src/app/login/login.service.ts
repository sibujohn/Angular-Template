import { Injectable } from '@angular/core';
import { HttpRequestService } from '../globals/shared-services/http-request.service';
import { HttpConfigService } from '../globals/shared-services/http-config.service';

@Injectable()
export class LoginService {

  constructor(private http : HttpRequestService, private httpConfigService : HttpConfigService) {
    
  }

  login(userName : string, password: string) : any {
    let userCredential = {
      userName : userName,
      password : password
    };
    
    return this.http.postRequest(this.httpConfigService.loginUrl, userCredential)
  }
}
