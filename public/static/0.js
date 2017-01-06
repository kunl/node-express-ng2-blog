webpackJsonp([0],{

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_module__ = __webpack_require__(698);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(exports, "PostModule", function() { return __WEBPACK_IMPORTED_MODULE_0__post_module__["a"]; });



/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = (function () {
    function PostService(_http, op) {
        this._http = _http;
        this.op = op;
        this._base_url = '/api/posts/';
        console.log(op);
    }
    PostService.prototype.getById = function (id) {
        var url = this._base_url + id;
        return this._http.get(url).map(function (res) { return res.json(); }).map(function (res) { return res.data; });
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]])
], PostService);



/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__(687);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = (function () {
    function DetailComponent(_route, _service) {
        this._route = _route;
        this._service = _service;
        console.log(this);
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params.id; })
            .subscribe(function (id) {
            console.log(id);
            _this.getDetail(id);
        });
    };
    DetailComponent.prototype.getDetail = function (id) {
        var _this = this;
        this._service.getById(id).subscribe(function (post) {
            _this.post = post;
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(702)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]])
], DetailComponent);



/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_component__ = __webpack_require__(693);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__detail_component__["a"]; });



/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_component__ = __webpack_require__(696);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list_component__["a"]; });



/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_route) {
        this._route = _route;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .map(function (params) { return params.id; })
            .subscribe(function (id) {
            console.log(id);
            _this.id = id;
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: __webpack_require__(703)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]])
], ListComponent);



/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostComponent; });
/**
 * Created by kunl on 2016/12/23-0023.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
    }
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        template: 'ee<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], PostComponent);



/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_service__ = __webpack_require__(687);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PostModule = (function () {
    function PostModule() {
    }
    return PostModule;
}());
PostModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '', redirectTo: '/about', pathMatch: 'full',
                },
                {
                    path: 'list',
                    component: __WEBPACK_IMPORTED_MODULE_5__list__["a" /* ListComponent */]
                },
                {
                    path: ':id',
                    component: __WEBPACK_IMPORTED_MODULE_6__detail__["a" /* DetailComponent */]
                }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_5__list__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__detail__["a" /* DetailComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__post_service__["a" /* PostService */]
        ]
    }),
    __metadata("design:paramtypes", [])
], PostModule);



/***/ },

/***/ 702:
/***/ function(module, exports) {

module.exports = "<article [innerHTML]=\"post?.content\"></article>"

/***/ },

/***/ 703:
/***/ function(module, exports) {

module.exports = "list-ddsgs"

/***/ }

});