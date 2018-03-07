webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_splash_component__ = __webpack_require__("../../../../../src/app/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/splash', pathMatch: 'full' },
    { path: 'splash', component: __WEBPACK_IMPORTED_MODULE_2__splash_splash_component__["a" /* SplashComponent */] },
    { path: 'core', component: __WEBPACK_IMPORTED_MODULE_3__core_core_component__["a" /* CoreComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_navbar_global_navbar_component__ = __webpack_require__("../../../../../src/app/global-navbar/global-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_navbar_global_navbar_elements_global_navbar_elements_component__ = __webpack_require__("../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__ = __webpack_require__("../../../../../src/app/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_component__ = __webpack_require__("../../../../../src/app/core/core.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__splash_splash_navigate_splash_navigate_component__ = __webpack_require__("../../../../../src/app/splash/splash-navigate/splash-navigate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__global_navbar_global_navbar_component__["a" /* GlobalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__global_navbar_global_navbar_elements_global_navbar_elements_component__["a" /* GlobalNavbarElementsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__splash_splash_component__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_8__core_core_component__["a" /* CoreComponent */],
                __WEBPACK_IMPORTED_MODULE_9__splash_splash_navigate_splash_navigate_component__["a" /* SplashNavigateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/core.component.html":
/***/ (function(module, exports) {

module.exports = "<app-global-navbar></app-global-navbar>\n"

/***/ }),

/***/ "../../../../../src/app/core/core.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreComponent = /** @class */ (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.ngOnInit = function () {
    };
    CoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-core',
            template: __webpack_require__("../../../../../src/app/core/core.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/core.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreComponent);
    return CoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Fascinate');\r\n.center-elements{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\nh1{\r\n  margin: 1vw 0 0 0;\r\n  display: inline-block;\r\n  font-size: 3vw;\r\n  font-family: 'Fascinate', black, serif;\r\n  color: #e17055;\r\n  vertical-align: top;\r\n}\r\n.goose-icon{\r\n  display: inline-block;\r\n  padding: 0;\r\n  margin-right: 1vw;\r\n  height: 6vw;\r\n  width: 6vw;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);\r\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"global-navbar-elements\">\n  <div class=\"center-elements\">\n    <img src=\"assets/goose.svg\" class=\"goose-icon\"> <h1>Marmosad</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalNavbarElementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalNavbarElementsComponent = /** @class */ (function () {
    function GlobalNavbarElementsComponent() {
    }
    GlobalNavbarElementsComponent.prototype.ngOnInit = function () {
    };
    GlobalNavbarElementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-global-navbar-elements',
            template: __webpack_require__("../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-navbar/global-navbar-elements/global-navbar-elements.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlobalNavbarElementsComponent);
    return GlobalNavbarElementsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#global-navbar-root{\r\n  height: 7vw;\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n  -webkit-box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\n          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\r\n\r\n}\r\n#global-navbar-strip{\r\n\theight: 7vw;\r\n\twidth: 100vw;\r\n\tpadding: 0;\r\n  background: #FFEAA7;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%)\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"global-navbar-root\" [@navAnimationState] = 'getState'>\n\t<div id=\"global-navbar-strip\">\n    <app-global-navbar-elements></app-global-navbar-elements>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/global-navbar/global-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalNavbarComponent = /** @class */ (function () {
    function GlobalNavbarComponent() {
        this.show = true;
    }
    GlobalNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggle();
        }, 1);
    };
    Object.defineProperty(GlobalNavbarComponent.prototype, "getState", {
        get: function () {
            return this.show ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    GlobalNavbarComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    GlobalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-global-navbar',
            template: __webpack_require__("../../../../../src/app/global-navbar/global-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-navbar/global-navbar.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('navAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'translateX(0) translateY(-100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'translateX(0) translateY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], GlobalNavbarComponent);
    return GlobalNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/splash/splash-navigate/splash-navigate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  @import url('https://fonts.googleapis.com/css?family=Fascinate');\r\n\r\n#enter:hover, #about:hover, h1:hover{\r\n  background-color: white;\r\n  color: #ffa082;\r\n  cursor: pointer;\r\n}\r\n\r\n#enter:hover, #about:hover{\r\n  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}\r\n\r\n#about, #enter{\r\n  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition: all 0.2s cubic-bezier(.25,.8,.25,1);\r\n  transition: all 0.2s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n#enter{\r\n  margin: 0 0 0 2vw;\r\n  float: left;\r\n  width: 15vw;\r\n  padding-right: 7vw;\r\n\r\n}\r\n\r\n#about{\r\n  float: right;\r\n  width: 15vw;\r\n  margin: 0 2vw 0 0;\r\n  padding-right: 7vw;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  padding: 1vw 4vw;\r\n  height: 6vw;\r\n  background-color: #FFEAA7;\r\n  color: #e17055;\r\n  font-family: 'Fascinate', serif;\r\n  horiz-align: center;\r\n  font-size: 5vw;\r\n  width: 14vw;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.overlay {\r\n  width: 55vw;\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -110%);\r\n          transform: translate(-50%, -110%);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash/splash-navigate/splash-navigate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" (click)=\"toCore()\" [@splashButtonsAnimationState] = 'getState'>\n  <div id=\"enter\">\n    <h1>Enter</h1>\n  </div>\n  <div id=\"about\">\n    <h1>About</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/splash/splash-navigate/splash-navigate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashNavigateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashNavigateComponent = /** @class */ (function () {
    function SplashNavigateComponent(router) {
        var _this = this;
        this.router = router;
        this.show = true;
        this.routeOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.animate = function (callRoute) {
            console.log('redirecting to core');
            _this.routeOut.emit(null);
            _this.toggle();
            setTimeout(function () {
                callRoute();
            }, 600);
        };
        this.route = function () {
            _this.router.navigate(['/core']);
        };
    }
    SplashNavigateComponent.prototype.toCore = function () {
        this.animate(this.route);
    };
    SplashNavigateComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SplashNavigateComponent.prototype, "getState", {
        get: function () {
            return this.show ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    SplashNavigateComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SplashNavigateComponent.prototype, "routeOut", void 0);
    SplashNavigateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash-navigate',
            template: __webpack_require__("../../../../../src/app/splash/splash-navigate/splash-navigate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/splash/splash-navigate/splash-navigate.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('splashButtonsAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateX(-50%) translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        transform: 'translateX(-200%) translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('600ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SplashNavigateComponent);
    return SplashNavigateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/splash/splash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://fonts.googleapis.com/css?family=Fascinate');\r\napp-splash{\r\n  width: 100vw;\r\n  height: 20vw;\r\n  border-style: solid;\r\n}\r\n.splash-wrapper {\r\n  height: 40vw;\r\n  width: 30vw;\r\n\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n.center-elements{\r\n  width: 55vw;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: 0 0 0 0;\r\n  padding-bottom: 2vw;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  border-bottom: 1vw solid #FFEAA7;\r\n}\r\nh1{\r\n  margin: 3vw 0 0 0;\r\n  display: inline-block;\r\n  font-size: 6vw;\r\n  font-family: 'Fascinate', serif;\r\n  color: #FFEAA7;\r\n  vertical-align: top;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n}\r\n.goose-icon{\r\n  display: inline-block;\r\n  margin: 0 7vw 0 0;\r\n  height: 15vw;\r\n  width: 15vw;\r\n  -webkit-box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 9px rgba(0,0,0,0.24);\r\n          box-shadow: 0 3px 9px rgba(0,0,0,0.12), 0 3px 9px rgba(0,0,0,0.24);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash/splash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"splash-wrapper\">\n  <div class=\"center-elements\" [@splashAnimationState]='getState'>\n    <img src=\"assets/goose.svg\" class=\"goose-icon\">\n    <h1>Marmosad</h1>\n  </div>\n  <div class=\"nav-button\">\n    <app-splash-navigate (routeOut)=\"toggle()\"></app-splash-navigate>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/splash/splash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashComponent = /** @class */ (function () {
    function SplashComponent() {
        this.show = true;
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SplashComponent.prototype, "getState", {
        get: function () {
            return this.show ? 'start' : 'end';
        },
        enumerable: true,
        configurable: true
    });
    SplashComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash',
            template: __webpack_require__("../../../../../src/app/splash/splash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/splash/splash.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('splashAnimationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('start', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'translateX(-50%) translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'translateX(100%) translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('start => end', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map