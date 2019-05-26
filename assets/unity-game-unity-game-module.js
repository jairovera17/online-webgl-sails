(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unity-game-unity-game-module"],{

/***/ "./src/app/unity-game/unity-game.module.ts":
/*!*************************************************!*\
  !*** ./src/app/unity-game/unity-game.module.ts ***!
  \*************************************************/
/*! exports provided: UnityGamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnityGamePageModule", function() { return UnityGamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unity_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unity-game.page */ "./src/app/unity-game/unity-game.page.ts");







var routes = [
    {
        path: '',
        component: _unity_game_page__WEBPACK_IMPORTED_MODULE_6__["UnityGamePage"]
    }
];
var UnityGamePageModule = /** @class */ (function () {
    function UnityGamePageModule() {
    }
    UnityGamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_unity_game_page__WEBPACK_IMPORTED_MODULE_6__["UnityGamePage"]]
        })
    ], UnityGamePageModule);
    return UnityGamePageModule;
}());



/***/ }),

/***/ "./src/app/unity-game/unity-game.page.html":
/*!*************************************************!*\
  !*** ./src/app/unity-game/unity-game.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>UnityGame</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-button (click)=\"test()\">\n    hola\n  </ion-button>\n\n  <div class=\"webgl-content\">\n    <div id=\"gameContainer\" style=\"width: 480px; height: 480%\"></div>\n    <div class=\"footer\">\n      <div class=\"webgl-logo\"></div>\n      <div class=\"fullscreen\" onclick=\"test()\"></div>\n      <div class=\"title\">Grid Navigator</div>\n    </div>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/unity-game/unity-game.page.scss":
/*!*************************************************!*\
  !*** ./src/app/unity-game/unity-game.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXR5LWdhbWUvdW5pdHktZ2FtZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/unity-game/unity-game.page.ts":
/*!***********************************************!*\
  !*** ./src/app/unity-game/unity-game.page.ts ***!
  \***********************************************/
/*! exports provided: UnityGamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnityGamePage", function() { return UnityGamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnityGamePage = /** @class */ (function () {
    function UnityGamePage() {
        this.appLocation = "../../assets/Unity/Build/Navgrid.json";
    }
    UnityGamePage.prototype.ngOnInit = function () {
        this.gameInstance = UnityLoader.instantiate("gameContainer", this.appLocation, { onProgress: UnityProgress });
    };
    UnityGamePage.prototype.test = function () {
        this.gameInstance.SetFullscreen(1);
    };
    UnityGamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unity-game',
            template: __webpack_require__(/*! ./unity-game.page.html */ "./src/app/unity-game/unity-game.page.html"),
            styles: [__webpack_require__(/*! ./unity-game.page.scss */ "./src/app/unity-game/unity-game.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnityGamePage);
    return UnityGamePage;
}());



/***/ })

}]);
//# sourceMappingURL=unity-game-unity-game-module.js.map