(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["babylon-game-babylon-game-module"],{

/***/ "./src/app/babylon-game/babylon-game.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/babylon-game/babylon-game.module.ts ***!
  \*****************************************************/
/*! exports provided: BabylonGamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabylonGamePageModule", function() { return BabylonGamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _babylon_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./babylon-game.page */ "./src/app/babylon-game/babylon-game.page.ts");







var routes = [
    {
        path: '',
        component: _babylon_game_page__WEBPACK_IMPORTED_MODULE_6__["BabylonGamePage"]
    }
];
var BabylonGamePageModule = /** @class */ (function () {
    function BabylonGamePageModule() {
    }
    BabylonGamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_babylon_game_page__WEBPACK_IMPORTED_MODULE_6__["BabylonGamePage"]]
        })
    ], BabylonGamePageModule);
    return BabylonGamePageModule;
}());



/***/ }),

/***/ "./src/app/babylon-game/babylon-game.page.html":
/*!*****************************************************!*\
  !*** ./src/app/babylon-game/babylon-game.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >\n      Babylon Game\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab>\n    <ion-fab-button color=\"dark\" (click)=\"rollEm($event)\">button</ion-fab-button>\n  </ion-fab>\n  <canvas id=\"surface\" style=\"pointer-events: none\" #surface ion-fixed></canvas>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/babylon-game/babylon-game.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/babylon-game/babylon-game.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhYnlsb24tZ2FtZS9iYWJ5bG9uLWdhbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/babylon-game/babylon-game.page.ts":
/*!***************************************************!*\
  !*** ./src/app/babylon-game/babylon-game.page.ts ***!
  \***************************************************/
/*! exports provided: BabylonGamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabylonGamePage", function() { return BabylonGamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babylon_js_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../babylon-js.service */ "./src/app/babylon-js.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");





var BabylonGamePage = /** @class */ (function () {
    function BabylonGamePage(engine, config) {
        this.engine = engine;
        this.config = config;
    }
    BabylonGamePage.prototype.ngOnInit = function () {
        this.engine.createEngine(this.surface.nativeElement);
        this.surface.nativeElement.width = window.innerWidth;
        this.surface.nativeElement.height = window.innerHeight;
        this.surface.nativeElement.style.width = '100%';
        this.surface.nativeElement.style.height = '100%';
        this.createScene();
        this.animate();
    };
    BabylonGamePage.prototype.ionViewWillEnter = function () {
        if (this.config.hasChanged) { // has anything changed?
            // then reset uv settings for both dice
            var options = {
                size: 1.25,
                faceUV: this.config.getFaceUV(this.config.colorOne),
                updatable: false
            };
            //MeshBuilder.UpdateBoxOptions(this.firstDie, options);
            var vertexData = babylonjs__WEBPACK_IMPORTED_MODULE_2__["VertexData"].CreateBox(options);
            vertexData.applyToMesh(this.firstDie, options.updatable);
            options = {
                size: 1.25,
                faceUV: this.config.getFaceUV(this.config.colorTwo),
                updatable: false
            };
            //MeshBuilder.UpdateBoxOptions(this.secondDie, options);
            vertexData = babylonjs__WEBPACK_IMPORTED_MODULE_2__["VertexData"].CreateBox(options);
            vertexData.applyToMesh(this.secondDie, options.updatable);
        }
    };
    BabylonGamePage.prototype.createScene = function () {
        // create a basic BJS Scene object
        this._scene = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Scene"](this.engine.getEngine());
        console.log(this._scene.enablePhysics(new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -10, 0))); // use physics!!
        // create an ArcRotateCamera
        // attach the camera to the canvas
        this._camera = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["ArcRotateCamera"]("ArcRotateCamera", 0, 0, 0, babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Zero(), this._scene);
        this._camera.setPosition(new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 15, 1));
        //this._camera.attachControl(this.surface.nativeElement, false);
        // create two  basic light, aiming 0,1,0 - meaning, to the sky
        this._lightOne = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["HemisphericLight"]('light1', new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](1, 0, 0), this._scene);
        this._lightTwo = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["HemisphericLight"]('light1', new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, -1), this._scene);
        this._lightOne.intensity = .6;
        this._lightTwo.intensity = .3;
        // materials and textures
        var green = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]("green", this._scene);
        green.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Color3"](0, .7, 0);
        var texture = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Texture"]('assets/images/die.svg', this._scene);
        // create a built-in "ground" shape and walls
        this.ground = babylonjs__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateGround('ground1', { width: 6, height: 1.618 * 6, subdivisions: 2 }, this._scene);
        this.ground.material = green;
        var physOptions = { mass: 0.0, restitution: .01, friction: .5 };
        this.ground.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"](this.ground, babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"].PlaneImpostor, physOptions, this._scene);
        var walls = [];
        for (var i = 0; i < 4; i++) {
            walls[i] = babylonjs__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateBox("wall_" + i, { depth: .1, width: 6, height: 32 }, this._scene);
            walls[i].rotation.y = i * Math.PI / 2;
            walls[i].position.y = 3;
            walls[i].material = green;
            if ((i == 1) || (i == 3)) {
                walls[i].scaling.x = 1.618;
            }
            walls[i].physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"](walls[i], babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"].BoxImpostor, { mass: 0 }, this._scene);
        }
        walls[0].position.z = 3 * 1.618;
        walls[2].position.z = -3 * 1.618;
        walls[1].position.x = 3;
        walls[3].position.x = -3;
        // create dice
        var faceUV = this.config.getFaceUV(this.config.colorOne);
        var options = {
            size: 1.25,
            faceUV: faceUV,
        };
        physOptions = { mass: 0.25, restitution: .1, friction: .1 }; // initialise physics
        this.firstDie = babylonjs__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateBox('firstDie', options, this._scene);
        this.firstDie.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"](this.firstDie, babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"].BoxImpostor, physOptions, this._scene);
        var firstDieMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]('firstDieMat', this._scene);
        this.firstDie.material = firstDieMaterial;
        firstDieMaterial.diffuseTexture = texture;
        faceUV = this.config.getFaceUV(this.config.colorTwo);
        options = {
            size: 1.25,
            faceUV: faceUV,
        };
        this.secondDie = babylonjs__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateBox('secondDie', options, this._scene);
        this.secondDie.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"](this.secondDie, babylonjs__WEBPACK_IMPORTED_MODULE_2__["PhysicsImpostor"].BoxImpostor, physOptions, this._scene);
        var secondDieMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["StandardMaterial"]('secondDieMat', this._scene);
        this.secondDie.material = secondDieMaterial;
        secondDieMaterial.diffuseTexture = texture;
        // set a random impulse for both dice
        this.rollEm(null);
    };
    BabylonGamePage.prototype.animate = function () {
        // run the render loop
        this.engine.start(this._scene);
    };
    BabylonGamePage.prototype.rollEm = function (event) {
        // roll the dice!
        this.firstDie.position = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.5, 1.5 + Math.random(), 2.5);
        this.secondDie.position = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.5, 1.5 + Math.random(), 2.5);
        var randomVector = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"]((.49 - Math.random()), -0.1, -1 + (-Math.random()));
        this.firstDie.physicsImpostor.applyImpulse(randomVector, this.firstDie.position);
        this.secondDie.physicsImpostor.applyImpulse(randomVector, this.secondDie.position);
    };
    BabylonGamePage.prototype.settings = function (event) {
        //   this.navCtrl.push(ConfigPage, {});
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('surface'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], BabylonGamePage.prototype, "surface", void 0);
    BabylonGamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-babylon-game',
            template: __webpack_require__(/*! ./babylon-game.page.html */ "./src/app/babylon-game/babylon-game.page.html"),
            styles: [__webpack_require__(/*! ./babylon-game.page.scss */ "./src/app/babylon-game/babylon-game.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_babylon_js_service__WEBPACK_IMPORTED_MODULE_3__["BabylonJSService"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], BabylonGamePage);
    return BabylonGamePage;
}());



/***/ })

}]);
//# sourceMappingURL=babylon-game-babylon-game-module.js.map