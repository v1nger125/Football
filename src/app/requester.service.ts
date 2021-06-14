import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  private token: string = 'b0e9014794224dfa8dd431491fc39d9e'

  constructor(private http: HttpClient) { }

  requestToAPI(requestURL: string, requestParam){
    return this.http.get(requestURL, {
      headers: {'X-Auth-Token': this.token},
      observe: 'body',
      responseType: 'json',
      params: {param: requestParam}
      })
  }
}
