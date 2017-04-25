var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpGet } from '../providers/http-get';
export var Global = (function () {
    function Global(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        console.log('Global');
    }
    Global = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Jsonp, HttpGet])
    ], Global);
    return Global;
}());
export var globalVar = {
    // phoneNumberService:"",
    // formatContacts:[],
    // allRecords:[],
    // isRecordsEmpty:true,
    // isDevice: true, 
    isDevice: false,
    hasLoadContacts: false,
    location: { latitude: '', longitude: '', city: '' }
};
export var HttpContents = {
    // auth_type_key: "auth_type=key",
    // auth_type_uid: "auth_type=uid",
    // sign_key: "9876543210!@#$%^",
    // invitedby: "1",
    // auth_type: "key",
    // invitedway: "ad",
    appos: '',
    // v: "6.1.0",
    // yzx: "3",
    ptype: '',
    device_id: '',
    device_version: '',
    brand_name: 'diancall/1.0',
    app_version: '',
    screen_resolution: screen.width * window.devicePixelRatio + "*" + screen.height * window.devicePixelRatio,
    app_agent: '',
    Brand36id: '2jvmuyiq',
    netmode: ''
};
var config_app = "/config/app";
var url_redyouzi = "http://c.diancall.com";
//test host 192.168.1.128
var urlHost = url_redyouzi;
//callback: urlHost +  call_back_new
export var HttpUrl = {
    getSmsregcode: urlHost + '/pipes/custuser/smsregcode/',
    getSmsChangecode: urlHost + "/pipes/custuser/smsmobcode/",
    register: urlHost + "/pipes/custuser/signup",
    login: urlHost + "/pipes/custuser/login",
    logout: urlHost + "/pipes/custuser/logout",
    callback: urlHost + "/pipes/custvoipcall/pretoback/",
    callbackCancel: urlHost + "/pipes/custvoipcall/canceltoback/",
    getToken: urlHost + "/pipes/custvoipcall/uctoken",
    getGoods: urlHost + "/pipes/charge/pkgs",
    getRechargeParams: urlHost + "/pipes/charge/prepay",
    checkRechargePay: urlHost + '/pipes/chargepay/check/',
    getConfigApp: urlHost + "/config/app",
    getRecharge: urlHost + "/order/pay",
    getUserWallet: urlHost + "/user/wallet",
    changeNickname: urlHost + '/pipes/custuser/updateusername',
    changePassword: urlHost + '/pipes/custuser/updatepwd',
    getResetPswCode: urlHost + '/pipes/custuser/smspwdcode',
    // resetPassword: urlHost + '/pipes/custuser/updatepwd',
    appInstallCount: urlHost + '/pipes/appinstall/create',
    checkin: urlHost + '/pipes/custuser/checkin',
    //add
    // trafficCharge: urlHost + '/pipes/nwcharge/pkgs/',
    trafficCharge: urlHost + '/pipes/custexper/experthing/fluxs',
    exchangePoints: urlHost + '/pipes/custexper/experthing/out/',
    updatePhone: urlHost + '/pipes/custuser/updatemobile',
    getOldSmsregcode: urlHost + '/pipes/custuser/smsodmcode',
    changePortrait: urlHost + '/pipes/upload/custuser',
    userbaseData: urlHost + '/pipes/custinfo/mybasedata',
    myTrafficCharge: urlHost + '/pipes/custexper/myexperthing/fluxs',
    myVoiceCharge: urlHost + '/pipes/custexper/myexperthing/voips',
    getOneExperthing: urlHost + '/pipes/custexper/experthing/find/',
    myExper: urlHost + '/pipes/custexper/myexper',
    experDetails: urlHost + '/pipes/custexper/queryin',
    experExchangeRecords: urlHost + '/pipes/custexper/queryout',
    voiceTime: urlHost + '/pipes/custvoipcall/myvoicetime',
    readMessages: urlHost + '/pipes/custmessage/queryreaded',
    unReadMessages: urlHost + '/pipes/custmessage/queryunread',
    hasReadMessages: urlHost + '/pipes/custmessage/read/',
    shopFamiliar: urlHost + '/pipes/custstore/mystores/familiar',
    shopNearby: urlHost + '/pipes/custstore/mystores/recently',
    searchShop: urlHost + '/pipes/custstore/searchstore',
    unfollowShop: urlHost + '/pipes/custstore/unfollow/',
    shopAllowPush: urlHost + '/pipes/custstore/unforbit/',
    shopForbitPush: urlHost + '/pipes/custstore/forbit/',
    followShop: urlHost + '/pipes/custstore/follow/',
    beautyPhotos: urlHost + '/pipes/custinfo/querygirl',
    queryNews: urlHost + '/pipes/custinfo/querynews',
    newsType: urlHost + '/pipes/custinfo/newstypes',
    firstNews: urlHost + '/pipes/custinfo/firstnews',
    queryjoke: urlHost + '/pipes/custinfo/queryjoke',
    gameTop: urlHost + '/pipes/custinfo/games/top',
    gameNew: urlHost + '/pipes/custinfo/games/new',
    gameHot: urlHost + '/pipes/custinfo/games/hot',
    guessLikeShop: urlHost + '/pipes/custstore/guesslikes',
    shopGoodsGroup: urlHost + '/pipes/custgoods/goodsgroup/',
    shopGoods: urlHost + '/pipes/custgoods/query/',
    arroundShops: urlHost + '/pipes/custstore/recentlystore',
};
export var showToast = function (msg) {
    window.plugins.toast.showShortCenter(msg);
};
/**
 * 设备信息
 */
var initDeviceInfo = function () {
    var device = window.device;
    var cordova = window.cordova;
    console.log('device.platform==' + device.platform);
    HttpContents.appos = device.platform;
    HttpContents.device_id = device.uuid;
    HttpContents.ptype = device.manufacturer + ' ' + device.model;
    HttpContents.device_version = device.version;
    cordova.getAppVersion.getVersionNumber(function (version) {
        // alert(version);
        HttpContents.app_version = version;
        HttpContents.app_agent = HttpContents.brand_name + '/' + HttpContents.app_version + '; ' +
            HttpContents.appos + '/' + HttpContents.device_version + '; ' +
            device.manufacturer + '/' + device.model + '; ' + HttpContents.screen_resolution;
        console.log('app_agent==' + HttpContents.app_agent);
    });
    // console.log('device_version=' + HttpContents.device_version);
    // console.log('device.manufacturer==' + device.manufacturer);
    // console.log('device.model==' + device.model);
    //	console.log('width==' + screen.width * window.devicePixelRatio + '  height==' + screen.height * window.devicePixelRatio);
};
/*
 * 获取网络状态
 */
var getNetWorkState = function () {
    var navigator = window.navigator;
    var networkState = navigator.connection.type;
    var Connection = window.Connection;
    //wifi、3g、4g、gprs
    var states = {};
    states[Connection.UNKNOWN] = 'gprs';
    states[Connection.ETHERNET] = 'gprs';
    states[Connection.WIFI] = 'wifi';
    states[Connection.CELL_2G] = 'gprs';
    states[Connection.CELL_3G] = '3g';
    states[Connection.CELL_4G] = '4g';
    states[Connection.CELL] = 'Cell generic connection';
    // states[Connection.NONE]     = 'No network connection';
    if (networkState === Connection.NONE) {
        showToast("网络断开！");
        return;
    }
    HttpContents.netmode = states[networkState];
};
/**
 * 初始化
 */
export var initNative = function () {
    initDeviceInfo();
    getNetWorkState();
};
export var initData = function () {
    //默认拨打方式
    if (localStorage.getItem('call_type') == null) {
        localStorage.setItem('call_type', 'call_back');
    }
};
export var constVar = {
    portrait_server_path: 'http://c.diancall.com/dir/custuser_128/',
    storefaceurl_300: 'http://c.diancall.com/dir/storeface_300/',
    storefaceurl_900: 'http://c.diancall.com/dir/storeface_900/',
    goodsfaceurl_300: 'http://c.diancall.com/dir/goods53_300/',
};
export var saveLoginInfo = function (res) {
    localStorage.setItem("custuserid", res.result.custuserid);
    localStorage.setItem("custuser36id", res.result.custuser36id);
    console.log('custuserid==' + res.result.custuserid);
    console.log('custuser36id==' + res.result.custuser36id);
    // localStorage.setItem("mobilex", res.result.mobilex);
    // localStorage.setItem("custuser36id", res.result.custuser36id);
    // localStorage.setItem("custuserid", res.result.custuserid);
    // localStorage.setItem("uid", res.result.brand36id);
};
export var loadScript = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (typeof (callback) != "undefined") {
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }
        else {
            script.onload = function () {
                callback();
            };
        }
    }
    script.src = url;
    document.body.appendChild(script);
};
export var code2Html = function (str) {
    var arrEntities = { 'nbsp': ' ' };
    str = str.replace(/&(nbsp);/ig, function (all, t) { return arrEntities[t]; }).replace(/\r?\n/g, "<br />");
    return str;
};
//# sourceMappingURL=global.js.map