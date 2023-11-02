import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpClientModule,
} from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private http : HttpClient ) { }

  baseUrlLive : any = 'http://localhost:8080/getToken';

  requestOptions: Object = {
    // headers: new HttpHeaders().append('Content-Type', 'application/json'),
    responseType: 'text',
  };

  getData(){
    alert("Called...!");
  }


  makePostRequest(requestName: String, rawBody: any) {
    return this.http
      .post(
        this.baseUrlLive,
        rawBody ,
        this.requestOptions
      )
      .pipe(
        map((xmlString: any) => {
          if (xmlString == "" || !xmlString) {
            return ""
          } else {
            var xmlResponce = xmlString 
            console.log(xmlResponce);
            return xmlResponce;
          }
        }),
        catchError((err) => {
          console.warn('INT ERR:', err);
          return err;
        })
      );
  }
}
