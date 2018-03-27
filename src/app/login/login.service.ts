import { Injectable } from '@angular/core';
import { HttpRequestService } from '../globals/shared-services/http-request.service';

@Injectable()
export class LoginService {

  private loginUrl : string = '/login'
  constructor(private http : HttpRequestService) {
    
  }

  login(userName : string, password: string) : any {
    let userCredential = {
      userName : userName,
      password : password
    };
    
    return this.http.postRequest(this.loginUrl, userCredential)
  }
}
