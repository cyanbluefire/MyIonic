import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams, RequestOptionsArgs, CookieXSRFStrategy } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { HttpContents, HttpUrl, globalVar } from '../common/global';
import { AppVersion, Device } from 'ionic-native';

@Injectable()
export class HttpGet {

  headers: Headers;
  options: RequestOptions;


  constructor(public http: Http) {
    this.options = new RequestOptions();
    this.options.method = RequestMethod.Get;
    // this.headers = new Headers();
    // this.headers.append('App-Agent', HttpContents.app_agent);
    // this.options.headers = this.headers;

  }

  httpMethodContext(url, params, onSuccess, context) {
    console.log("httpMethod params==" + JSON.stringify(params));
    // params.setAll    
    this.options.url = url;
    this.config(params);
    this.http.request(new Request(this.options))
      .toPromise()
      .then(res => {
        console.log("Http-Response==" + JSON.stringify(res.json()));
        // console.log('response_cookie==' +JSON.stringify( res.headers.toJSON()));
        onSuccess(res.json(), context);
      })
      .catch(this.handleError);
  }

  httpMethod(url, params, onSuccess) {
    console.log("httpMethod params==" + JSON.stringify(params));
    this.options.url = url;
    this.config(params);

    this.http.request(new Request(this.options))
      .toPromise()
      .then(res => { console.log("Http-Response==" + JSON.stringify(res.json())); onSuccess(res.json()); })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  config(params) {
    let header: Headers = new Headers();
    header.append('App-Agent', HttpContents.app_agent);
    // console.log('ooooooo=='+JSON.stringify(HttpContents.app_agent));
    this.options.headers = header;

    let searchParams = new URLSearchParams();
    if (Object.keys(params).length > 0) {
      for (let param in params) {
        console.log("param==" + param + "  params==" + params[param]);
        if (typeof (params[param]) === "object" &&
          Object.prototype.toString.call(params[param]).toLowerCase() == "[object object]" && !params[param].length) {
          console.log("params[param] is JSON object");
          params[param] = JSON.stringify(params[param]);
        }
        searchParams.set(param, params[param]);

      }
    }
    this.options.search = searchParams;
  }
}

