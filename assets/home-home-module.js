(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title >\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n\n  <ion-grid>\n  <ion-row>\n   <ion-col size=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"2\" >\n      <ion-card routerLink=\"/evo\" routerDirection=\"forward\">\n      <ion-card-header>\n        <ion-card-title>\n          Usando HTML \n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <img src=\"https://ih1.redbubble.net/image.361593789.5453/ap,550x550,12x12,1,transparent,t.png\" alt=\"Smiley face\">\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n     <ion-col size=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"2\" >\n      <ion-card routerLink=\"/babylon-game\" routerDirection=\"forward\">\n      <ion-card-header>\n        <ion-card-title>\n          Babylon Game \n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content >\n        <img src=\"data:image/png;base64,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\" alt=\"Smiley face\">\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n     <ion-col size=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"2\">\n      <ion-card routerLink=\"/unity-game\" routerDirection=\"forward\">\n      <ion-card-header>\n        <ion-card-title>\n          Unity Game \n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <img src=\"https://cdn.slant.co/9bdcd6a0-a16f-4ea7-a762-dd712197beeb/-/format/jpeg/-/progressive/yes/-/preview/480x480/\" alt=\"Smiley face\">\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n    <ion-col size=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"4\" size-xl=\"2\"  *ngFor=\"let item of myarray\">\n      <ion-card >\n      <ion-card-header>\n        <ion-card-title>\n          Title card {{item}}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <img src=\"https://cdn.shopify.com/s/files/1/1384/3839/products/hang_in_there_design_large.jpg?v=1470792685\" alt=\"Smiley face\">\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n  </ion-row>\n  \n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map