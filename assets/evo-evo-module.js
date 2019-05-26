(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["evo-evo-module"],{

/***/ "./src/app/evo/evo.module.ts":
/*!***********************************!*\
  !*** ./src/app/evo/evo.module.ts ***!
  \***********************************/
/*! exports provided: EvoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoPageModule", function() { return EvoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _evo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evo.page */ "./src/app/evo/evo.page.ts");







var routes = [
    {
        path: '',
        component: _evo_page__WEBPACK_IMPORTED_MODULE_6__["EvoPage"]
    }
];
var EvoPageModule = /** @class */ (function () {
    function EvoPageModule() {
    }
    EvoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_evo_page__WEBPACK_IMPORTED_MODULE_6__["EvoPage"]]
        })
    ], EvoPageModule);
    return EvoPageModule;
}());



/***/ }),

/***/ "./src/app/evo/evo.page.html":
/*!***********************************!*\
  !*** ./src/app/evo/evo.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Evo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <div style=\"text-align:center\">\n\n    <h1>Puntuación</h1>\n\n    <h3>{{score}}</h3>\n\n    <ion-button color=\"primary\" (click)=\"sumar()\">Sumar 1</ion-button>\n    <ion-button color=\"danger\" (click)=\"restar()\">Restar 1</ion-button>\n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/evo/evo.page.scss":
/*!***********************************!*\
  !*** ./src/app/evo/evo.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2by9ldm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/evo/evo.page.ts":
/*!*********************************!*\
  !*** ./src/app/evo/evo.page.ts ***!
  \*********************************/
/*! exports provided: EvoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvoPage", function() { return EvoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EvoPage = /** @class */ (function () {
    function EvoPage() {
    }
    EvoPage.prototype.ngOnInit = function () {
        this.score = 0;
    };
    EvoPage.prototype.sumar = function () {
        if (this.score < 10)
            this.score++;
        else {
            alert("Has Ganado");
            this.score = 0;
        }
    };
    EvoPage.prototype.restar = function () {
        if (this.score > 0)
            this.score--;
        else
            alert('No puntuaciones negativas');
    };
    EvoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-evo',
            template: __webpack_require__(/*! ./evo.page.html */ "./src/app/evo/evo.page.html"),
            styles: [__webpack_require__(/*! ./evo.page.scss */ "./src/app/evo/evo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EvoPage);
    return EvoPage;
}());



/***/ })

}]);
//# sourceMappingURL=evo-evo-module.js.map