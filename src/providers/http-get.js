var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { HttpContents } from '../common/global';
export var HttpGet = (function () {
    function HttpGet(http) {
        this.http = http;
        this.options = new RequestOptions();
        this.options.method = RequestMethod.Get;
        // this.headers = new Headers();
        // this.headers.append('App-Agent', HttpContents.app_agent);
        // this.options.headers = this.headers;
    }
    HttpGet.prototype.httpMethodContext = function (url, params, onSuccess, context) {
        console.log("httpMethod params==" + JSON.stringify(params));
        // params.setAll    
        this.options.url = url;
        this.config(params);
        this.http.request(new Request(this.options))
            .toPromise()
            .then(function (res) { console.log("Http-Response==" + JSON.stringify(res.json())); onSuccess(res.json(), context); })
            .catch(this.handleError);
    };
    HttpGet.prototype.httpMethod = function (url, params, onSuccess) {
        console.log("httpMethod params==" + JSON.stringify(params));
        this.options.url = url;
        this.config(params);
        this.http.request(new Request(this.options))
            .toPromise()
            .then(function (res) { console.log("Http-Response==" + JSON.stringify(res.json())); onSuccess(res.json()); })
            .catch(this.handleError);
    };
    HttpGet.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    HttpGet.prototype.config = function (params) {
        var header = new Headers();
        header.append('App-Agent', HttpContents.app_agent);
        this.options.headers = header;
        var searchParams = new URLSearchParams();
        if (Object.keys(params).length > 0) {
            for (var param in params) {
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
    };
    HttpGet = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], HttpGet);
    return HttpGet;
}());
//# sourceMappingURL=http-get.js.map