import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpConfigService } from '../shared-services/http-config.service';

@Injectable()
export class HttpRequestService implements HttpInterceptor {

  constructor(private http: HttpClient, private httpConfigService : HttpConfigService) { }

  getRequest(requestUrl : any) : Observable<any> {
    return this.http.get(
      this.httpConfigService.baseUrl + requestUrl
      // {
      //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
      // }
    );
  }
 
  postRequest(requestUrl : string, data : any) : Observable<any>{
    return this.http.post(
      this.httpConfigService.baseUrl+requestUrl,
      data
      // {
      //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + token))
      // }
    );
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const customReq = request.clone({});

    return next
      .handle(customReq)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          
        }
      })
      .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', response);
        }
        return Observable.throw(response);
      });
  }
}