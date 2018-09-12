(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section: Parallax -->\n<section class=\"section section-questions transform1\" *ngIf=\"!animationDone\">\n  <div class=\"pimg1 transform\" [ngStyle]=\"{top: top}\">\n    <div class=\"ptext\">\n      <span class=\"white-text transform1\" [ngStyle]=\"{opacity: op}\">\n        Comic Store\n      </span>\n    </div>\n  </div>\n</section>\n\n\n<div class=\"transform1\" [ngStyle]=\"{opacity: opacity}\"  *ngIf=\"animationDone\">\n\n  <!--Home navbar-->\n\n<div class=\"navbar-fixed\" style=\"opacity: 0.9;\" >\n  <nav class=\"white\">\n    <div class=\"container\">\n      <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo\"><img src=\"https://expatliving.hk/wp-content/uploads/2017/10/pastedImage.png\" style=\"height: 50px; width: 50px\"></a>\n        <a href=\"#\" data-target=\"mobile-nav\" class=\"sidenav-trigger\" onclick=\"maFonction1()\">\n          <i class=\"material-icons black-text\">menu</i>\n        </a>\n        <ul class=\"right hide-on-med-and-down\">\n          <li>\n            <a routerLink=\"livres\" class=\"dropdown-trigger dropdownProduct black-text transform1\" data-target=\"dropdown1\" style=\"opacity: 1; background-color: white; outline: none !important; font-family: 'Chalkduster'\"><span>Comics</span></a>\n          </li>\n          <li>\n            <a href=\"/blog\" class=\" black-text transform1\" style=\"opacity: 1; background-color: white; font-family: 'Chalkduster'\">Blog</a>\n          </li>\n          <li>\n            <a href=\"#contact\" class=\"black-text transform1\" style=\"opacity: 1; background-color: white; font-family: 'Chalkduster'\">Contact</a>\n          </li>\n          <li>\n            <a *ngIf=\"!auth\" id=\"log\" class=\"modal-trigger black-text transform1\" data-target= \"modal1\" style=\"background-color: white; font-family: 'Chalkduster'\" >Sign In <i class=\"material-icons right\">person_pin</i></a>\n            <a *ngIf=\"auth\" class=\"dropdownProduct transform1 text\" [ngClass]=\"{'dropdown-trigger': admin}\" data-target=\"dropdown2\" style=\"background-color: white\"><span [ngStyle]=\"{color: nameColor}\">{{name}}</span></a>\n          </li>\n          <li *ngIf=\"auth\">\n            <a *ngIf=\"auth\" class=\"modal-trigger transform1\" data-target=\"modal2\" style=\"background-color: white\"><i class=\"fas fa-sign-out-alt black-text right\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<!-- SideNav  -->\n<div class=\"hide-on-med-and-down\" style=\"position: fixed; width: 170px; margin-top: 60px; margin-left: 10px; z-index: 5\">\n  <div style=\"border-bottom: 1px solid black; width: 50px\"></div>\n  <ul>\n    <li style=\"margin: 20px\" (mouseover)=\"onHover1()\" (mouseleave)=\"onLeave1()\">\n      <a routerLink=\"home\" class=\"beef1 black-text\"><span id=\"home\" style=\"font-family: 'Comic Sans MS'\">Home</span></a>\n      <div class=\"transform\" style=\"border-bottom: 1px solid rgb(8, 100, 19)\" [ngStyle]=\"{width: width1}\"></div>\n    </li>\n    <li style=\"margin: 20px\" (mouseover)=\"onHover2()\" (mouseleave)=\"onLeave2()\">\n      <a href=\"#services\" class=\" beef1 black-text\"><span id=\"tintin\" style=\"font-family: 'Comic Sans MS'\">Tintin</span></a>\n      <div class=\"transform\" style=\"border-bottom: 1px solid rgb(8, 100, 19)\" [ngStyle]=\"{width: width2}\"></div>\n    </li>\n    <li style=\"margin: 20px\" (mouseover)=\"onHover3()\" (mouseleave)=\"onLeave3()\">\n      <a href=\"/produits\" class=\" beef1 black-text\"><span id=\"gaston\" style=\"font-family: 'Comic Sans MS'\">Gaston Lagaffe</span></a>\n      <div class=\"transform\" style=\"border-bottom: 1px solid rgb(8, 100, 19)\" [ngStyle]=\"{width: width3}\"></div>\n    </li>\n    <li style=\"margin: 20px\" (mouseover)=\"onHover4()\" (mouseleave)=\"onLeave4()\">\n      <a href=\"/blog\" class=\" beef1 black-text\"><span id=\"spirou\" style=\"font-family: 'Comic Sans MS'\">Spirou</span></a>\n      <div class=\"transform\" style=\"border-bottom: 1px solid rgb(8, 100, 19)\" [ngStyle]=\"{width: width4}\"></div>\n    </li>\n    <li style=\"margin: 20px\" (mouseover)=\"onHover5()\" (mouseleave)=\"onLeave5()\">\n      <a href=\"#contact\" class=\"beef1 black-text\"><span id=\"astérix\" style=\"font-family: 'Comic Sans MS'\">Astérix</span></a>\n      <div class=\"transform\" style=\"border-bottom: 1px solid rgb(8, 100, 19)\" [ngStyle]=\"{width: width5}\"></div>\n    </li>\n    <li style=\"margin: 20px\">\n      <a id=\"log1\" class=\"modal-trigger black-text\" data-target = \"modal1\"><i class=\"material-icons\">person_pin</i></a>\n    </li>\n  </ul>\n  <div style=\"border-bottom: 1px solid black; width: 50px\"></div>\n</div>\n\n<!-- NavBar Sign In MODAL  -->\n<div id=\"modal1\" class=\"modal\" style=\"max-height: 600px !important\">\n  <div class=\"modal-content\">\n    <div *ngIf=\"!signup\">\n\n      <h4><span class=\"txt1\">Login</span> Page</h4>\n\n      <div *ngIf=\"errMess && !auth\" class=\"red lighten-4 red-text\">\n        <p style=\"text-align:center; font-size: 16px;\">Mauvais nom d'utilisateur ou mot de passe</p>\n      </div>\n\n      <div *ngIf=\"auth\" class=\"green lighten-4 green-text\">\n        <h4>You are logged in as <span style=\"text-transform: capitalize\">{{name}}</span></h4>\n      </div>\n      <br>\n\n      <div *ngIf=\"signupSuccess\" class=\"green lighten-4 green-text\">\n        <h4>Thanks for registering <span style=\"text-transform: capitalize\">{{name}}</span></h4>\n      </div>\n      <br>\n\n      <form *ngIf=\"!auth\" (ngSubmit)=\"onSubmit(s)\" #s=\"ngForm\" id=\"loginForm\">\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <label for=\"username\">\n            Username\n          </label>\n          <input type=\"text\" id=\"username\" [(ngModel)]=\"user1.username\" #username=\"ngModel\" required name=\"usename\">\n        </div>\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">lock</i>\n          <label for=\"password\">\n            Password\n          </label>\n          <input type=\"password\" id=\"password\" [(ngModel)]=\"user1.password\" #password=\"ngModel\" required name=\"password\">\n        </div>\n        <div *ngIf=\"!auth\" class=\"modal-footer\">\n          <button *ngIf=\"!auth\" type=\"button\" class=\"modal-close btn-flat cancel\">Cancel</button>\n          <button *ngIf=\"!auth\"  type=\"submit\" name=\"submit\" class=\"btn-flat waves-effect waves-light\" [disabled]=\"s.invalid\">Login<i class=\"material-icons right\">arrow_forward</i></button>\n        </div>\n      </form>\n      <div *ngIf=\"auth\" class=\"modal-footer\">\n        <button *ngIf=\"auth\" type=\"button\" class=\"modal-close btn-flat\" (click)=\"reload()\">Close</button>\n      </div>\n    </div>\n\n    <div *ngIf=\"signup\">\n\n      <h4><span class=\"txt1\">Sign Up</span> Page</h4>\n\n      <div *ngIf=\"emailProblem\" class=\"red lighten-4 red-text\">\n        <p style=\"text-align:center; font-size: 16px;\">Les adresses mail ne coïncident pas</p>\n      </div>\n      <br>\n\n      <form (ngSubmit)=\"onSignup(q)\" #q=\"ngForm\" id=\"signupForm\">\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">account_circle</i>\n          <label for=\"name\">\n            Nom et Prénom\n          </label>\n          <input type=\"text\" id=\"name\" [(ngModel)]=\"user.name\" #name=\"ngModel\" required name=\"name\">\n        </div>\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">room</i>\n          <label for=\"address\">\n            Adresse pour livraison (optionel)\n          </label>\n          <input type=\"text\" id=\"address\" [(ngModel)]=\"user.address\" #address=\"ngModel\" name=\"address\">\n        </div>\n        <div class=\"input-field\">\n          <i class=\"material-icons validate prefix\">email</i>\n          <label for=\"username\">\n            Adresse Mail\n          </label>\n          <input type=\"email\" class=\"validate\" id=\"username1\" [(ngModel)]=\"user.username\" #username1=\"ngModel\" required name=\"username\">\n          <span class=\"helper-text\" data-error=\"Enter a valid email address please\" data-success=\"Valid Email address\">Email address</span>\n        </div>\n        <div class=\"input-field\" (focusout)=\"checkEmail()\">\n          <i class=\"material-icons prefix\">email</i>\n          <label for=\"emailConfirm\">\n            Confirmation de l'adresse mail\n          </label>\n          <input type=\"text\" id=\"emailConfirm\" required name=\"emailConfirm\">\n        </div>\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">lock</i>\n          <label for=\"password\">\n            Password\n          </label>\n          <input type=\"password\" id=\"password1\" [(ngModel)]=\"user.password\" #password1=\"ngModel\" required name=\"password\">\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"modal-close btn-flat cancel\">Cancel</button>\n          <button type=\"submit\" name=\"submit\" class=\"btn-flat waves-effect waves-light\" [disabled]=\"q.invalid\">Sing Up<i class=\"material-icons right\">arrow_forward</i></button>\n        </div>\n      </form>\n    </div>\n\n    <button *ngIf=\"!signup\" type=\"button\" class=\"btn-flat blue lighten-2 white-text\" style=\"border-radius: 5px\" (click)=\"signUpButton()\">Sign Up!</button>\n    <button *ngIf=\"signup\" type=\"button\" class=\"btn-flat blue lighten-2 white-text\" style=\"border-radius: 5px\" (click)=\"loginButton()\">Log In</button>\n\n  </div>\n</div>\n\n\n<!-- NavBar Sign Out MODAL  -->\n\n<div id=\"modal2\" class=\"modal\">\n  <div class=\"modal-content\">\n    <h4><span class=\"txt1\">Logout </span>Message</h4>\n    <p>Êtes-vous sûrs de vouloir vous déconnecter?</p>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"modal-close btn-flat cancel\">Cancel</button>\n        <button type=\"button\" name=\"logout\" class=\"modal-close btn-flat waves-effect waves-light\" (click)=\"logOut()\">Logout<i class=\"fas fa-sign-out-alt red-text right\"></i></button>\n      </div>\n  </div>\n</div>\n\n<!-- DropDown structure  products-->\n<ul style=\"border-left: 1px solid rgb(8, 100, 19)\" id=\"dropdown1\" class=\"dropdown-content\">\n  <li><a class=\"black-text\" href=\"#\" style=\"font-family: 'Comic Sans MS'\">Tintin</a></li>\n  <li><a class=\"black-text\" href=\"#\" style=\"font-family: 'Comic Sans MS'\">Spirou</a></li>\n  <li><a class=\"black-text\" href=\"#\" style=\"font-family: 'Comic Sans MS'\">Gaston Lgaffe</a></li>\n  <li><a class=\"black-text\" href=\"#\" style=\"font-family: 'Comic Sans MS'\">Astérix</a></li>\n</ul>\n\n<!-- DropDown structure  Admin-->\n<ul style=\"border-left: 1px solid rgb(202, 8, 19)\" class=\"dropdown-content \" id=\"dropdown2\">\n  <li><a class=\"textComic black-text\" href=\"/contacts\">Liste de Contacts</a></li>\n  <li><a class=\"textComic black-text\" href=\"/new-product\">Nouvelle BD</a></li>\n  <li><a class=\"textComic black-text\" href=\"/new-author\">Nouvel Auteur</a></li>\n</ul>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n  <!-- Footer -->\n   <footer class=\"section blue-grey darken-3 white-text\">\n     <div class=\"row\">\n       <div class=\"col s12 m6\">\n         <div style=\"margin-left: 100px\">\n           <p style=\"font-size: 25px\">Fast <span class=\"txt\" [ngStyle]=\"{color: color}\">Links</span></p>\n           <div style=\"margin-left: 70px\">\n             <a (mouseover)=\"underLineOn1()\" (mouseleave)=\"underLineOff1()\" class=\"white-text\" style=\"font-size: 18px\" href=\"\"><span id=\"span1\">Acceuil </span><i class=\"fas fa-caret-right\"></i></a> <br>\n\n             <a (mouseover)=\"underLineOn2()\" (mouseleave)=\"underLineOff2()\"  class=\"white-text\" style=\"font-size: 18px\" href=\"#services\"><span id=\"span2\">Services </span><i class=\"fas fa-caret-right\"></i></a> <br>\n\n             <a (mouseover)=\"underLineOn3()\" (mouseleave)=\"underLineOff3()\"  class=\"white-text\" style=\"font-size: 18px\" href=\"/produits\"><span id=\"span3\">Produits </span><i class=\"fas fa-caret-right\"></i></a> <br>\n\n             <a (mouseover)=\"underLineOn4()\" (mouseleave)=\"underLineOff4()\"  class=\"white-text\" style=\"font-size: 18px\" href=\"/blog\"><span id=\"span4\">Blog </span><i class=\"fas fa-caret-right\"></i></a> <br>\n\n             <a (mouseover)=\"underLineOn5()\" (mouseleave)=\"underLineOff5()\"  class=\"white-text\" style=\"font-size: 18px\" href=\"#contact\"><span id=\"span5\">Contact </span><i class=\"fas fa-caret-right\"></i></a> <br>\n           </div>\n         </div>\n       </div>\n       <div class=\"col s12 m6 center\">\n         <h4>Follow <span class=\"txt\" [ngStyle]=\"{color: color}\">E-thik</span></h4>\n         <p>Suivez nous sur les réseaux sciaux pour être au courant de toutes les nouveautés dans le monde des distributeurs automatiques modernes</p>\n         <a href=\"#\" class=\"white-text\">\n          <i class=\"fab fa-facebook fa-2x\" style=\"color: LightBlue; margin: 5px\"></i>\n        </a>\n        <a href=\"#\" class=\"white-text\">\n          <i class=\"fab fa-twitter fa-2x\" style=\"color: LightBlue; margin: 5px\"></i>\n        </a>\n        <a href=\"#\" class=\"white-text\">\n          <i class=\"fab fa-linkedin fa-2x\" style=\"color: LightBlue; margin: 5px\"></i>\n        </a>\n        <a href=\"#\" class=\"white-text\">\n          <i class=\"fab fa-google-plus fa-2x\" style=\"color: LightBlue; margin: 5px\"></i>\n        </a>\n        <p class=\"flow-text\">E-thik &copy; 2018 </p>\n       </div>\n     </div>\n\n   </footer>\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pimg1 {\n  background-image: url(\"http://getwallpapers.com/wallpaper/full/5/4/a/974307-top-tin-tin-wallpaper-1920x1200-for-ipad-pro.jpg\");\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.ptext {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  color: #000;\n  font-size: 40px;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  font-weight: 200; }\n\n.transform1 {\n  transition: all 1s ease; }\n\n.text {\n  font-family: \"Chalkduster\"; }\n\n.textComic {\n  font-family: \"Comic Sans MS\"; }\n\n.transform {\n  transition: all 0.6s ease; }\n\n.transformSlow {\n  transition: all 2s ease; }\n\n/* valid color */\n\n.input-field input[type=text].valid {\n  border-bottom: 1px solid green;\n  box-shadow: 0 1px 0 0 green; }\n\n/* invalid color */\n\n.input-field input[type=text].invalid {\n  border-bottom: 1px solid red;\n  box-shadow: 0 1px 0 0 red; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(contactService, authService, productService) {
        this.contactService = contactService;
        this.authService = authService;
        this.productService = productService;
        this.auth = false;
        this.admin = false;
        //Start animation values
        this.anim = "false";
        this.animationDone = false;
        this.op = 0;
        this.opacity = 0;
        this.top = "0px";
        this.user = { username: '', password: '', address: '', name: '' };
        this.user1 = { username: '', password: '' };
        this.contact = { firstName: '', lastName: '', email: '', phone: '', company: '', message: '' };
        //theme Color
        this.color = "rgb(8, 100, 19)";
        //Hover SideNav
        this.width1 = "0px";
        this.width2 = "0px";
        this.width3 = "0px";
        this.width4 = "0px";
        this.width5 = "0px";
        //Login or Signup
        this.signup = false;
        this.signupSuccess = false;
        //Signup
        this.emailProblem = false;
        //name color depending on admin or not
        this.nameColor = "green";
        this.false = "false";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get the products in array
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (errmess) { return _this.errMess1 = errmess; });
        //check token validity
        this.authService.checkJWTtoken();
        //stay logged in between reloads
        if (localStorage.getItem('token')) {
            this.auth = true;
            this.name = localStorage.getItem('name');
        }
        else {
            this.auth = false;
        }
        //check if user is admin
        if (localStorage.getItem('admin') == 'true') {
            this.admin = true;
            this.nameColor = "red";
        }
        else {
            this.admin = false;
            this.nameColor = "green";
        }
        //Start animation or NOT
        this.anim = localStorage.getItem('animationDone');
        if (this.anim == "true") {
            this.animationDone = true;
        }
        else {
            this.animationDone = false;
        }
        //starting animation
        if (this.anim != 'true') {
            setTimeout(function () {
                _this.top = "-800px";
                setTimeout(function () {
                    _this.anim = "true";
                    localStorage.setItem('animationDone', _this.anim);
                    _this.animationDone = true;
                }, 500);
                setTimeout(function () {
                    _this.opacity = 1;
                }, 600);
            }, 1000);
            setTimeout(function () {
                _this.op = 1;
            }, 50);
        }
        else {
            this.opacity = 1;
        }
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.signupSuccess = false;
        this.authService.logIn(this.user1)
            .subscribe(function (res) {
            if (res.success) {
                //stay connected through page reloads
                _this.auth = true;
                if (res.admin) {
                    _this.admin = true;
                }
                _this.name = res.name;
            }
            else {
                console.log(res);
                alert(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    AppComponent.prototype.onSignup = function () {
        var _this = this;
        console.log(this.user);
        var m = document.getElementById('username1');
        var mV = document.getElementById('emailConfirm');
        var mail = m.toString();
        var mailVerif = mV.toString();
        if (mail == mailVerif) {
            this.emailProblem = false;
            mV.classList.add('valid');
            this.authService.signUp(this.user)
                .subscribe(function (res) {
                if (res.success) {
                    console.log('success');
                    _this.signup = false;
                    _this.signupSuccess = true;
                    _this.name = _this.user.name;
                }
                else {
                    console.log(res);
                    alert(res);
                }
            }, function (error) {
                console.log(error);
                _this.errMess = error;
            });
        }
        else {
            this.emailProblem = true;
            mV.classList.add('invalid');
            return null;
        }
    };
    //logout
    AppComponent.prototype.logOut = function () {
        this.auth = false;
        this.errMess = undefined;
        this.authService.logOut();
        window.location.reload();
    };
    //reload page when sign in modal closed
    AppComponent.prototype.reload = function () {
        window.location.reload();
    };
    //initialise google maps
    AppComponent.prototype.initMap = function () {
        var coords = new google.maps.LatLng(48.839191, 2.284871);
        var mapOptions = {
            center: coords,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: coords,
            title: 'E-thik Corporate'
        });
    };
    //check if the sign up email are the same
    AppComponent.prototype.checkEmail = function () {
        var m = document.getElementById('username1');
        var mV = document.getElementById('emailConfirm');
        var mail = m.toString();
        var mailVerif = mV.toString();
        if (mail === mailVerif) {
            alert('coincident');
            mV.classList.add('valid');
            mV.classList.remove('invalid');
        }
        else {
            mV.classList.add('invalid');
            mV.classList.remove('valid');
        }
    };
    //Sign Up button
    AppComponent.prototype.signUpButton = function () {
        this.signup = true;
    };
    //Log In button
    AppComponent.prototype.loginButton = function () {
        this.signup = false;
    };
    AppComponent.prototype.onHover1 = function () {
        var w = jquery__WEBPACK_IMPORTED_MODULE_3__('#home').width();
        this.width1 = w.toString() + "px";
    };
    AppComponent.prototype.onLeave1 = function () {
        this.width1 = "0px";
    };
    AppComponent.prototype.onHover2 = function () {
        var w = jquery__WEBPACK_IMPORTED_MODULE_3__('#tintin').width();
        this.width2 = w.toString() + "px";
    };
    AppComponent.prototype.onLeave2 = function () {
        this.width2 = "0px";
    };
    AppComponent.prototype.onHover3 = function () {
        var w = jquery__WEBPACK_IMPORTED_MODULE_3__('#gaston').width();
        this.width3 = w.toString() + "px";
    };
    AppComponent.prototype.onLeave3 = function () {
        this.width3 = "0px";
    };
    AppComponent.prototype.onHover4 = function () {
        var w = jquery__WEBPACK_IMPORTED_MODULE_3__('#spirou').width();
        this.width4 = w.toString() + "px";
    };
    AppComponent.prototype.onLeave4 = function () {
        this.width4 = "0px";
    };
    AppComponent.prototype.onHover5 = function () {
        var w = jquery__WEBPACK_IMPORTED_MODULE_3__('#astérix').width();
        this.width5 = w.toString() + "px";
    };
    AppComponent.prototype.onLeave5 = function () {
        this.width5 = "0px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("map"),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "mapElement", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseurl */ "./src/app/baseurl.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.interceptor */ "./src/app/services/auth.interceptor.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _product_model_product_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-model/product-model.component */ "./src/app/product-model/product-model.component.ts");
/* harmony import */ var _tintin_model_tintin_model_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tintin-model/tintin-model.component */ "./src/app/tintin-model/tintin-model.component.ts");
/* harmony import */ var _asterix_model_asterix_model_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./asterix-model/asterix-model.component */ "./src/app/asterix-model/asterix-model.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./new-product/new-product.component */ "./src/app/new-product/new-product.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./author/author.component */ "./src/app/author/author.component.ts");
/* harmony import */ var _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./new-author/new-author.component */ "./src/app/new-author/new-author.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./news-item/news-item.component */ "./src/app/news-item/news-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: "", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"] },
    { path: "home", component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"] },
    { path: "livres", component: _products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"] },
    { path: "livres/:id", component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"] },
    { path: "new-product", canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_21__["NewProductComponent"] },
    { path: "test", component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"] },
    { path: "news", component: _news_news_component__WEBPACK_IMPORTED_MODULE_27__["NewsComponent"] },
    { path: "new-author", canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_26__["NewAuthorComponent"] },
    { path: "contacts", canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_22__["ContactListComponent"] },
    { path: '**', redirectTo: '/not-found' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_15__["HomePageComponent"],
                _product_model_product_model_component__WEBPACK_IMPORTED_MODULE_16__["ProductModelComponent"],
                _tintin_model_tintin_model_component__WEBPACK_IMPORTED_MODULE_17__["TintinModelComponent"],
                _asterix_model_asterix_model_component__WEBPACK_IMPORTED_MODULE_18__["AsterixModelComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_20__["ProductsComponent"],
                _new_product_new_product_component__WEBPACK_IMPORTED_MODULE_21__["NewProductComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_22__["ContactListComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_24__["FilterPipe"],
                _author_author_component__WEBPACK_IMPORTED_MODULE_25__["AuthorComponent"],
                _new_author_new_author_component__WEBPACK_IMPORTED_MODULE_26__["NewAuthorComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_27__["NewsComponent"],
                _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_28__["NewsItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDOCn3zbngn6maokzk0O6QpYzUArGSVzIw'
                })
            ],
            providers: [
                _services_contact_service__WEBPACK_IMPORTED_MODULE_7__["ContactService"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
                { provide: 'BaseUrl', useValue: _baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] },
                _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_10__["ProcessHTTPMsgService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                _services_author_service__WEBPACK_IMPORTED_MODULE_9__["AuthorService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["UnauthorizedInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asterix-model/asterix-model.component.html":
/*!************************************************************!*\
  !*** ./src/app/asterix-model/asterix-model.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card col s3 transform1\" (mouseover)=\"onHover()\" (mouseleave)=\"onLeave()\" style=\"width: 250px; margin: 10px;\">\n    <div class=\"card-image waves-effect waves-block waves-light\" style=\"margin-top: 5px; margin-left: -5px; margin-right: -5px\">\n      <img class=\"activator transform\" src={{imageSource}}>\n    </div>\n    <div class=\"card-content transform\" [ngStyle]=\"{'margin-top': cardTop}\">\n      <button class=\"btn-flat\" style=\"border-radius: 5%; background-color: rgb(202, 8, 19); color: white; font-style: italic; font-size: 20px\" (click)=\"pTransition(_id)\">{{price}}$</button><i class=\"material-icons right\">more_vert</i>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">{{title}}<i class=\"material-icons right\">close</i></span>\n      <p>{{description}}</p>\n      <button class=\"btn-flat white-text right\" style=\"background-color: green; text-align: center; width: 100%\">{{price}}$<i class=\"fas fa-cart-plus white-text\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/asterix-model/asterix-model.component.scss":
/*!************************************************************!*\
  !*** ./src/app/asterix-model/asterix-model.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transform1 {\n  transition: all 1s ease; }\n\n.transform {\n  transition: all 0.6s ease; }\n"

/***/ }),

/***/ "./src/app/asterix-model/asterix-model.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/asterix-model/asterix-model.component.ts ***!
  \**********************************************************/
/*! exports provided: AsterixModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsterixModelComponent", function() { return AsterixModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AsterixModelComponent = /** @class */ (function () {
    function AsterixModelComponent(homePageComponent, router, productService) {
        this.homePageComponent = homePageComponent;
        this.router = router;
        this.productService = productService;
        this.mLeft = '0px';
        this.cardTop = "-80px";
    }
    AsterixModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var time = setInterval(function () {
            _this.mLeft = _this.homePageComponent.mLeftAsterix;
        }, 50);
        this.color = this.homePageComponent.color;
        this.imageSource = _baseurl__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + "images/" + this.imageName;
    };
    AsterixModelComponent.prototype.pTransition = function (id) {
        var _this = this;
        localStorage.setItem("imageCart", this.imageSource);
        localStorage.setItem("priceCart", this.price);
        this.homePageComponent.startTop = "-500px";
        this.homePageComponent.opacity = 0;
        setTimeout(function () {
            _this.router.navigate(['livres/' + id]);
        }, 600);
    };
    AsterixModelComponent.prototype.onHover = function () {
        this.cardTop = "0px";
    };
    AsterixModelComponent.prototype.onLeave = function () {
        this.cardTop = "-80px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "synopsis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "isbn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "author", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "imageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AsterixModelComponent.prototype, "_id", void 0);
    AsterixModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asterix-model',
            template: __webpack_require__(/*! ./asterix-model.component.html */ "./src/app/asterix-model/asterix-model.component.html"),
            styles: [__webpack_require__(/*! ./asterix-model.component.scss */ "./src/app/asterix-model/asterix-model.component.scss")]
        }),
        __metadata("design:paramtypes", [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], AsterixModelComponent);
    return AsterixModelComponent;
}());



/***/ }),

/***/ "./src/app/author/author.component.html":
/*!**********************************************!*\
  !*** ./src/app/author/author.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <h4 style=\"font-style: italic; font-family: 'Times New Roman'\">Fiche <span [ngStyle]=\"{color: color}\">Auteur</span> : </h4>\n  <div style=\"border-bottom: 1px solid black; width: 100px\"></div>\n  <br><br>\n\n  <div class=\"col s12 m2\">\n    <img src={{imageSource}} style=\"height: 150px; width: 150px; border-radius: 50%\">\n  </div>\n  <div class=\"col s12 m7\">\n    <span style=\"font-family: 'Times New Roman'; font-size: 33px; letter-spacing: 5px\">{{name}}</span><br>\n    <span style=\"margin-left: 50px; color: rgba(202, 8, 19, 0.6)\">Né le {{birth}}, {{name}} est un auteur {{nationality}}</span>\n  </div>\n</div>\n<div class=\"col s10\" style=\"border-left: 1px solid rgb(202, 8, 19); opacity: 0.7; margin-left: 75px\">\n  <p style=\"margin: 30px; text-align: justify\">{{biography}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/author/author.component.scss":
/*!**********************************************!*\
  !*** ./src/app/author/author.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/author/author.component.ts":
/*!********************************************!*\
  !*** ./src/app/author/author.component.ts ***!
  \********************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
        this.color = "rgb(8, 100, 19)";
    }
    AuthorComponent.prototype.ngOnInit = function () {
        this.imageSource = _baseurl__WEBPACK_IMPORTED_MODULE_1__["baseUrl"] + "images/" + this.imageName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuthorComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuthorComponent.prototype, "birth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuthorComponent.prototype, "biography", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuthorComponent.prototype, "nationality", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuthorComponent.prototype, "imageName", void 0);
    AuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.scss */ "./src/app/author/author.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/baseurl.ts":
/*!****************************!*\
  !*** ./src/app/baseurl.ts ***!
  \****************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
var baseUrl = "http://ec2-35-180-114-147.eu-west-3.compute.amazonaws.com:8080";


/***/ }),

/***/ "./src/app/contact-list/contact-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <section>\n    <h2><u>Contact list</u></h2>\n    <br><br>\n    <div class=\"container transform1\" [ngStyle]=\"{'margin-top': top, opacity: opacity}\">\n          <app-contact\n            *ngFor = \"let contact of contacts\"\n            [firstName] = 'contact.firstName'\n            [lastName] = 'contact.lastName'\n            [phone] = 'contact.phone'\n            [email] = 'contact.email'\n            [company] = 'contact.company'\n            [message] = 'contact.message'\n            [_id] = 'contact._id'\n          ></app-contact>\n    </div>\n  </section>\n</body>\n"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #000;\n  font-size: 40px;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  font-weight: 200; }\n\nu {\n  text-decoration: none;\n  border-bottom: 1px solid black; }\n\n.transform1 {\n  transition: all 1s ease; }\n"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactService, authService, appComponent) {
        this.contactService = contactService;
        this.authService = authService;
        this.appComponent = appComponent;
        this.admin = false;
        this.top = "100px";
        this.opacity = 0;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts()
            .subscribe(function (contacts) { _this.contacts = contacts; _this.contacts.reverse(); }, function (errmess) { return _this.errMess = errmess; });
        this.authService.checkJWTtoken();
        this.admin = this.appComponent.admin;
        setTimeout(function () {
            _this.top = "0px";
            _this.opacity = 1;
        }, 100);
    };
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card small\">\n\n    <div class=\"card-content\">\n      <div class=\"row\">\n        <div class=\"col s12 m11\">\n          <span class=\"card-title\" style=\"text-transform: capitalize\"> <strong class=\"blue-text\" style=\"text-transform: uppercase; letter-spacing: 4px;\">{{lastName}}</strong> {{firstName}}</span>\n        </div>\n        <div class=\"col s12 m1\">\n          <button *ngIf=\"admin\" class=\"btn-flat white\" (click)=\"deleteContact(_id)\"><i class=\"fas fa-times-circle red-text\"></i></button>\n        </div>\n      </div>\n      <br>\n      <p class=\"flow-text\" style=\"margin-left: 5%;\">{{message}}</p>\n    </div>\n    <div class=\"card-tabs\">\n      <ul class=\"tabs tabs-fixed-width\" materialize=\"tabs\">\n        <li class=\"tab\"><a href=\"#{{firstName}}\"><i class=\"material-icons\">email</i></a></li>\n        <li class=\"tab\"><a class=\"active\" href=\"#{{phone}}\"><i class=\"material-icons\">phone</i></a></li>\n        <li class=\"tab\"><a href=\"#{{company}}\"><i class=\"material-icons\">business</i></a></li>\n      </ul>\n    </div>\n    <div class=\"card-content grey lighten-4\">\n      <div id=\"{{firstName}}\" style=\"text-align: center\"><a [href]=\"'mailto:' + email\"  target=\"_self\">{{email}}</a></div>\n      <div id=\"{{phone}}\" style=\"text-align: center\"><a [href]=\"'tel:' + phone\"  target=\"_self\">{{phone}}</a></div>\n      <div id=\"{{company}}\" style=\"text-align: center\">{{company}}</div>\n    </div>\n  </div>\n\n  <br><br>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  color: #6e3c96;\n  font-size: 40px; }\n\n.transform1 {\n  transition: all 1s ease; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService, appComponent) {
        this.contactService = contactService;
        this.appComponent = appComponent;
        this.admin = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts()
            .subscribe(function (contacts) { return _this.contacts = contacts; }, function (errmess) { return _this.errMess = errmess; });
        this.admin = this.appComponent.admin;
    };
    ContactComponent.prototype.deleteContact = function (id) {
        var _this = this;
        if (confirm('Êtes-vous sûr de vouloir supprimer ce contact?')) {
            this.contactService.deleteContact(id)
                .subscribe(function (contacts) { return _this.contacts = contacts; }, function (errmess) { return _this.errMess = errmess; });
        }
        window.location.reload();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "firstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "lastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "email", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ContactComponent.prototype, "phone", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContactComponent.prototype, "_id", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, term) {
        if (term === undefined)
            return products.title;
        return products.filter(function (product) {
            return product.title.toLowerCase().includes(term.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [ngStyle]=\"{opacity: opacity, 'margin-top': startTop}\" style=\"margin-top: 300px\" class=\"transform1\">\n\n<section class=\"transform1\" [ngStyle]=\"{'background-image': wallpaper}\" style=\"z-index: -2;background-attachment: fixed\">\n  <!-- Section: Parallax -->\n  <section>\n    <div class=\"pimg1\">\n      <div class=\"ptext\">\n        <span class=\"black-text transform1\">\n          The new Comic Store\n        </span>\n      </div>\n    </div>\n  </section>\n\n<br>\n\n<!-- Section: Item added in Cart -->\n<div *ngIf=\"cart\" class=\"transform1 col s10 offset-s1\" style=\"height: 80px; border: 1px solid green; border-radius: 10px; background-color: rgba(100, 200, 100, 0.6)\" [ngStyle]=\"{'margin-top': mTop, 'opacity': op1}\">\n  <div class=\"row\">\n    <div class=\"col s12 m1\" style=\"margin-top: 10px;\">\n      <i class=\"material-icons green-text prefix medium\">check</i>\n    </div>\n    <div class=\"col s12 m1\">\n      <img src={{imageCart}} style=\"height: 70px; max-width: 70px; margin:2px\">\n    </div>\n    <div class=\"col s12 m2\">\n      <span style=\"color: green; font-size: 19px\">Added to Cart</span><br>\n      <span>Comics</span>\n    </div>\n    <div class=\"col s12 m1\" style=\"border-left: 1px solid green; height: 60px; margin-top: 10px\"></div>\n    <div class=\"col s12 m4\" style=\"margin-top: 20px\">\n      <span><span style=\"font-weight: bold; font-size: 20px\">Item price: </span> <span style=\"font-style: italic; color: red\"> {{priceCart}}$</span></span>\n    </div>\n    <div class=\"col s12 m3\">\n      <button type=\"button\" class=\"btn-flat grey white-text\" style=\"margin-top: 20px;border-radius: 5px\">Cart</button>\n      <button type=\"button\" class=\"btn-flat orange white-text right\"  style=\"margin-top: 20px; border-radius: 5px\">Checkout</button>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Section: Description -->\n<div>\n  <div class=\"row transform1\">\n    <div class=\"col s8 offset-s2\">\n      <h2 style=\"text-align: center; font-family: 'Times New Roman'; font-weight: 200\">Le monde de la Bande <span [ngStyle]=\"{color: color}\">Dessinée</span></h2>\n      <p style=\"text-align: center; font-weight: 200; font-size: 15px; letter-spacing: 3px; opacity: 0.6\">C'est un monde bien particulier. Au delà d'une simple histoire c'est un art écrit et visuel. Chacune\n      unique dans son style c'est ce qui rend cette communauté si grande et si passionnée.</p>\n    </div>\n  </div>\n</div>\n</section>\n\n<!-- Divider -->\n<div class=\"col s10 offset-s1\">\n  <div style=\"border-bottom: 1px solid black; opacity: 0.2\"></div>\n</div>\n<br><br>\n<br><br>\n\n\n<!-- Searhc section -->\n<div class=\"row\">\n  <div class=\"col s5 offset-s1\">\n    <span [ngStyle]=\"{color: color}\" style=\"font-size: 30px; font-family: 'Times New Roman'\">Que recherchez-vous? </span>\n  </div>\n  <div class=\"col s9 offset-s3\">\n    <form id=\"filter\">\n      <div class=\"input-field\" id=\"searchBar\">\n        <i class=\"material-icons prefix\" id=\"searchIcon\">search</i>\n        <input id=\"term\" type=\"text\" placeholder=\"Filtrer par titre\" [(ngModel)]=\"term\" name=\"term\">\n      </div>\n    </form>\n    <ul style=\"max-height: 100px; overflow: scroll; margin-left: 70px; border-left: 1px solid rgb(202, 8, 19)\">\n      <li *ngFor=\"let product of products | filter:term\" ><button class=\"btn-flat white black-text\" (click)=\"pTransition(product._id)\">{{product.title}}</button></li>\n    </ul>\n  </div>\n</div>\n\n\n<!-- Section: Produits -->\n<div class=\"slide\">\n\n  <h4 style=\"font-style: italic; font-family: 'Times New Roman'\">Tintin et <span [ngStyle]=\"{color: color}\">Milou</span> : </h4>\n  <div style=\"border-bottom: 1px solid black; width: 100px\"></div>\n  <br><br>\n\n<div class=\"row\">\n\n  <div class=\"col s12 m11\">\n  <div id=\"container\" >\n    <div id=\"slider\" style=\"width: 10000px\">\n\n      <div class=\"row\">\n        <app-tintin-model\n          *ngFor=\"let tintin of tintins\"\n          [title]=\"tintin.title\"\n          [description]=\"tintin.description\"\n          [category]=\"tintin.category\"\n          [imageName]=\"tintin.imageName\"\n          [price]=\"tintin.price\"\n          [language]=\"tintin.language\"\n          [isbn]=\"tintin.isbn\"\n          [synopsis]=\"tintin.synopsis\"\n          [author]=\"tintin.author\"\n          [_id]=\"tintin._id\"\n        ></app-tintin-model>\n      </div>\n\n    </div>\n  </div>\n  </div>\n\n    <div class=\"col s12 m1\" style=\"background-color: LightGrey; opacity: 0.4\">\n      <button class=\"btn-flat white-text\" (click)=\"onClickTintin()\" style=\"text-align: center; height: 450px; width: 100%\"><i class=\"fas fa-arrow-circle-right fa-5x right\"></i></button>\n    </div>\n\n</div>\n\n</div>\n\n<br><br><br>\n\n<div class=\"slide\">\n\n  <h4 style=\"font-style: italic; font-family: 'Times New Roman'\">Astérix et <span [ngStyle]=\"{color: color}\">Obélix</span> : </h4>\n  <div style=\"border-bottom: 1px solid black; width: 100px\"></div>\n  <br><br>\n\n<div class=\"row\">\n\n  <div class=\"col s12 m11\">\n  <div id=\"container\" >\n    <div id=\"slider\" style=\"width: 10000px\">\n\n      <div class=\"row\">\n        <app-asterix-model\n        *ngFor=\"let product of products\"\n        [title]=\"product.title\"\n        [description]=\"product.description\"\n        [category]=\"product.category\"\n        [imageName]=\"product.imageName\"\n        [price]=\"product.price\"\n        [language]=\"product.language\"\n        [isbn]=\"product.isbn\"\n        [synopsis]=\"product.synopsis\"\n        [author]=\"product.author\"\n        [_id]=\"product._id\"\n        ></app-asterix-model>\n      </div>\n\n    </div>\n  </div>\n  </div>\n\n  <div class=\"col s12 m1\" style=\"background-color: LightGrey; opacity: 0.4\">\n    <button class=\"btn-flat white-text\" (click)=\"onClickAsterix()\" style=\"text-align: center; height: 450px; width: 100%\"><i class=\"fas fa-arrow-circle-right fa-5x right\"></i></button>\n  </div>\n\n</div>\n\n</div>\n\n\n\n\n\n\n<!-- Section: Contact -->\n <section id=\"contact\" class=\"section section-contact scrollspy\">\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col s12 m6\">\n         <div class=\"card-panel black-text grey lighten-3 center\">\n           <i class=\"material-icons\" style=\"color: black\">email</i>\n           <h5><span  [ngStyle]=\"{color: color}\">Nous Contacter</span></h5>\n           <br>\n           <div class=\"col s8 offset-s2\" style=\"border-bottom: 1px solid black; opacity: 0.2\"></div>\n           <br>\n           <p style=\"opacity: 0.6\">Vous pouvez nous contacter du <span  [ngStyle]=\"{color: color}\">lundi</span> au <span  [ngStyle]=\"{color: color}\">vendredi</span> par télephone au <a [href]=\"'tel:' + phone\"  target=\"_self\"  [ngStyle]=\"{color: color}\">0646797513</a> ou laisser un <span  [ngStyle]=\"{color: color}\">message</span> et on reviendra vers vous au plus vite.</p>\n         </div>\n         <div #map id=\"map\"></div>\n       </div>\n       <div class=\"col s12 m6\">\n         <div class=\"card-panel grey lighten-3 hoverable\">\n           <h5>Laisser un <span  [ngStyle]=\"{color: color}\">Message</span></h5>\n           <form (ngSubmit)=\"onSubmit()\" #contactForm=\"ngForm\" id=\"contactForm\">\n             <div class=\"input-field transformMedium\" [ngStyle]=\"{'margin-top': p1}\">\n               <i class=\"material-icons prefix\">account_circle</i>\n               <label for=\"firstName\">\n                 Prénom\n               </label>\n               <input type=\"text\" id=\"firstName\" [(ngModel)]=\"contact.firstName\" required name=\"firstName\">\n             </div>\n             <div class=\"input-field transformMedium\" [ngStyle]=\"{'margin-top': p2}\">\n               <i class=\"material-icons prefix\">account_circle</i>\n               <label for=\"lastName\">\n                 Nom\n               </label>\n               <input type=\"text\" id=\"name\" [(ngModel)]=\"contact.lastName\" required name=\"lastName\">\n             </div>\n             <div class=\"input-field transformMedium\" [ngStyle]=\"{'margin-top': p3}\">\n               <i class=\"material-icons prefix\">email</i>\n               <label for=\"email\">\n                 Email\n               </label>\n               <input type=\"text\" id=\"email\" [(ngModel)]=\"contact.email\" required name=\"email\">\n             </div>\n             <div class=\"input-field transformMedium\" [ngStyle]=\"{'margin-top': p4}\">\n               <i class=\"material-icons prefix\">phone</i>\n               <label for=\"phone\">\n                 Mobile\n               </label>\n               <input type=\"text\" id=\"phone\" [(ngModel)]=\"contact.phone\" required name=\"phone\">\n             </div>\n             <div class=\"input-field transformMedium\" [ngStyle]=\"{'margin-top': p5}\">\n               <i class=\"material-icons prefix\">business</i>\n               <label for=\"company\">\n                 Entreprise\n               </label>\n               <input type=\"text\" id=\"company\" [(ngModel)]=\"contact.company\" required name=\"company\">\n             </div>\n             <div class=\"input-field transformMedium\" [ngStyle]=\"{'margin-top': p6}\">\n               <i class=\"material-icons prefix\">edit</i>\n               <label for=\"message\">\n                 Votre Message\n               </label>\n               <textarea id=\"message\" [(ngModel)]=\"contact.message\" required name=\"message\" class=\"materialize-textarea\"></textarea>\n             </div>\n             <button onclick=\"M.toast({html: 'Message Sent', classes: 'teal darken-3'})\" type=\"submit\" name=\"submit\" class=\"btn white-text\" [disabled]=\"contactForm.invalid\">Submit<i class=\"material-icons right\">send</i></button>\n        </form>\n         </div>\n       </div>\n     </div>\n   </div>\n </section>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-left: -20%;\n  width: 140%; }\n\n.pimg1 {\n  height: 50vh;\n  width: 100%;\n  position: relative;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.ptext {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  color: #000;\n  font-size: 40px;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  font-weight: 200; }\n\n.transform1 {\n  transition: all 1s ease; }\n\n.transform {\n  transition: all 0.6s ease; }\n\n.bd {\n  width: 120%; }\n\n.card-image {\n  max-height: 300px; }\n\n.slide {\n  width: 120%; }\n\n/* label focus color */\n\n.input-field #term:focus + label {\n  color: #ca0813; }\n\n/* label underline focus color */\n\n.input-field #term:focus {\n  border-bottom: 1px solid #ca0813;\n  box-shadow: 0 1px 0 0 #ca0813; }\n\n/* icon prefix focus color */\n\n.input-field .prefix.active {\n  color: black; }\n\n#container {\n  max-height: 450px;\n  overflow: hidden; }\n\n#slider {\n  position: relative;\n  max-height: 450px; }\n\n#map {\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/contact.service */ "./src/app/services/contact.service.ts");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(appComponent, productDetailComponent, productService, authService, contactService, router) {
        this.appComponent = appComponent;
        this.productDetailComponent = productDetailComponent;
        this.productService = productService;
        this.authService = authService;
        this.contactService = contactService;
        this.router = router;
        //theme color
        this.color = "rgb(8, 100, 19)";
        //product Arrays
        this.products = [];
        this.tintins = [];
        this.asterixs = [];
        this.contact = { firstName: '', lastName: '', email: '', phone: '', company: '', message: '' };
        //Product Slider
        this.leftOther = 0;
        this.left1 = 0;
        this.left2 = 0;
        this.mLeftOther = "0px";
        this.mLeftTintin = "0px";
        this.mLeftAsterix = "0px";
        //Product added message
        this.cart = false;
        this.inCart = "false";
        this.op1 = 0;
        this.mTop = "-50px";
        //Product Click
        this.op2 = 0;
        this.tp = "-400px";
        this.startTop = "300px";
        this.opacity = 0;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get products
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (errmess) { return _this.errMess = errmess; });
        this.products.reverse;
        //check login status
        this.authService.checkJWTtoken();
        //divide products into categories
        setTimeout(function () {
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].category == "tintin") {
                    _this.tintins.push(_this.products[i]);
                }
                else if (_this.products[i].category == "asterix") {
                    _this.asterixs.push(_this.products[i]);
                }
            }
        }, 500);
        //wallpaper
        this.wallpaper = "url(" + _baseurl__WEBPACK_IMPORTED_MODULE_6__["baseUrl"] + "images/wallpaper.png)";
        //check if a new product was added to the cart
        this.inCart = localStorage.getItem('inCart');
        this.imageCart = localStorage.getItem('imageCart');
        this.priceCart = localStorage.getItem('priceCart');
        if (this.inCart == "true") {
            this.cart = true;
            setTimeout(function () {
                _this.op1 = 1;
                _this.mTop = "30px";
            }, 50);
            setTimeout(function () {
                _this.op1 = 0;
                _this.mTop = "-80px";
                setTimeout(function () {
                    _this.inCart = "false";
                    _this.cart = false;
                    localStorage.setItem('inCart', _this.inCart);
                    _this.productService.imageUrl = '';
                    _this.productService.price = '';
                }, 800);
            }, 10000);
        }
        //page transition test
        setTimeout(function () {
            _this.opacity = 1;
            _this.startTop = "0px";
        }, 100);
        //Google maps
        this.initMap();
    };
    HomePageComponent.prototype.onClickTintin = function () {
        if (this.left1 > -540) {
            this.left1 = this.left1 - 270;
            this.mLeftTintin = this.left1.toString() + "px";
        }
        else {
            this.left1 = 0;
            this.mLeftTintin = "0px";
        }
    };
    HomePageComponent.prototype.onClickAsterix = function () {
        if (this.left2 > -540) {
            this.left2 = this.left2 - 270;
            this.mLeftAsterix = this.left2.toString() + "px";
        }
        else {
            this.left2 = 0;
            this.mLeftAsterix = "0px";
        }
    };
    //Buton to send message
    HomePageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.contactService.postContact(this.contact)
            .subscribe(function (res) {
            if (res.success) {
                alert('Message Sent!');
            }
            else {
                console.log(res);
            }
        }, function (error) {
            console.log(error);
            _this.errMess = error;
        });
    };
    //initialise google maps
    HomePageComponent.prototype.initMap = function () {
        var coords = new google.maps.LatLng(48.8568175, 2.2723135);
        var mapOptions = {
            center: coords,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: coords,
            title: 'Comic Store'
        });
    };
    //page transition
    HomePageComponent.prototype.pTransition = function (id) {
        var _this = this;
        this.startTop = "-1000px";
        this.opacity = 0;
        setTimeout(function () {
            _this.router.navigate(['livres/' + id]);
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("map"),
        __metadata("design:type", Object)
    ], HomePageComponent.prototype, "mapElement", void 0);
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/new-author/new-author.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-author/new-author.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-questions transform1\" [ngStyle]=\"{'margin-top': marginTop}\">\n  <div class=\"pimg1\">\n    <div class=\"ptext\">\n      <span class=\"white-text\">\n        New Author\n      </span>\n    </div>\n  </div>\n</section>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h5><span class=\"txt\">Details</span> New Author</h5>\n    <br><br>\n    <form (ngSubmit)=\"onSubmit(q)\" #q=\"ngForm\" id=\"contactForm\">\n      <div class=\"input-field\">\n        <div class=\"row\">\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">person_pin</i>\n            <input type=\"text\" placeholder=\"Auhtor Full Name\" id=\"name\" [(ngModel)]=\"author.name\" required name=\"name\">\n          </div>\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">person_pin</i>\n            <input type=\"text\" placeholder=\"Date of Birth\" id=\"birth\" [(ngModel)]=\"author.birth\" required name=\"birth\">\n          </div>\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">room</i>\n            <input type=\"text\" placeholder=\"Nationality\" id=\"nationality\" [(ngModel)]=\"author.nationality\" required name=\"nationality\">\n          </div>\n        </div>\n      </div>\n      <br><br>\n      <div class=\"input-field\">\n        <div class=\"row\">\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">image</i>\n            <input type=\"file\" id=\"file\" [(ngModel)]=\"author.file\" (change)=\"onFileSelected($event)\" required name=\"productPhoto\">\n            <br><br><br>\n            <li class=\"green-text\">File chosen: {{selectedFile.name}}</li>\n          </div>\n          <div class=\"col s12 m8\">\n            <i class=\"material-icons prefix\">edit</i>\n            <textarea id=\"synopsis\" placeholder=\"Biography\" [(ngModel)]=\"author.biography\" required name=\"biography\" class=\"materialize-textarea\"></textarea>\n          </div>\n        </div>\n      </div>\n      <br><br>\n      <button onclick=\"M.toast({html: 'Product Added', classes: 'teal darken-3'})\" type=\"submit\" name=\"submit\" class=\"btn waves-effect waves-light right\" [disabled]=\"q.invalid\">Save<i class=\"material-icons right\">save</i></button>\n </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-author/new-author.component.scss":
/*!******************************************************!*\
  !*** ./src/app/new-author/new-author.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ptext {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  color: #000;\n  font-size: 40px;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-shadow: 2px 2px black; }\n\n.pimg1 {\n  background-image: url(\"https://stmed.net/sites/default/files/comics-wallpapers-27542-7579279.jpg\");\n  min-height: 550px;\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.txt {\n  letter-spacing: 6px;\n  text-transform: uppercase;\n  color: #004d40; }\n\nsection {\n  width: 140%;\n  margin-left: -20%; }\n\n.transform1 {\n  transition: all 1s ease; }\n"

/***/ }),

/***/ "./src/app/new-author/new-author.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-author/new-author.component.ts ***!
  \****************************************************/
/*! exports provided: NewAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuthorComponent", function() { return NewAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/author.service */ "./src/app/services/author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewAuthorComponent = /** @class */ (function () {
    function NewAuthorComponent(authorService, authService, router, http) {
        this.authorService = authorService;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.author = { name: '', birth: '', nationality: '', biography: '', file: '' };
        this.selectedFile = null;
        this.marginTop = "300px";
    }
    NewAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAuthors()
            .subscribe(function (authors) { return _this.authors = authors; }, function (errmess) { return _this.errMess = errmess; });
        this.authService.checkJWTtoken();
        setTimeout(function () {
            _this.marginTop = "0px";
        });
    };
    NewAuthorComponent.prototype.onSubmit = function () {
        var _this = this;
        if (confirm("Etes-vous sûr de vouloir ajouter ce nouveau produit?")) {
            this.uploadImage();
            if (this.selectedFile) {
                this.author.file = this.selectedFile.name;
            }
            this.authorService.postAuthor(this.author)
                .subscribe(function (res) {
                if (res.success) {
                    alert('Bien enregistré!');
                    _this.router.navigate(["home"]);
                }
                else {
                    console.log(res);
                }
            }, function (error) {
                console.log(error);
                _this.errMess = error;
            });
        }
        else {
            return null;
        }
    };
    NewAuthorComponent.prototype.refresh = function () {
        setTimeout(function () {
            location.reload();
        }, 500);
    };
    NewAuthorComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    NewAuthorComponent.prototype.uploadImage = function () {
        var fd = new FormData();
        fd.append('productPhoto', this.selectedFile, this.selectedFile.name);
        this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "imageUpload", fd)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    NewAuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-author',
            template: __webpack_require__(/*! ./new-author.component.html */ "./src/app/new-author/new-author.component.html"),
            styles: [__webpack_require__(/*! ./new-author.component.scss */ "./src/app/new-author/new-author.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_author_service__WEBPACK_IMPORTED_MODULE_5__["AuthorService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], NewAuthorComponent);
    return NewAuthorComponent;
}());



/***/ }),

/***/ "./src/app/new-product/new-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-questions transform1\" [ngStyle]=\"{'margin-top': marginTop}\">\n  <div class=\"pimg1\">\n    <div class=\"ptext\">\n      <span class=\"white-text\">\n        New Product\n      </span>\n    </div>\n  </div>\n</section>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h5><span class=\"txt\">Details</span> New Product</h5>\n    <br><br>\n    <form (ngSubmit)=\"onSubmit(q)\" #q=\"ngForm\" id=\"contactForm\">\n      <div class=\"input-field\">\n        <i class=\"fas fa-list-ul prefix\"></i>\n        <select name=\"category\" id=\"category\" [(ngModel)]=\"product.category\"  >\n          <option value=\"\" disabled selected>Choose option below</option>\n          <option value=\"tintin\">Tintin et Milou</option>\n          <option value=\"gaston\">Gaston Lagaffe</option>\n          <option value=\"spirou\">Spirou</option>\n          <option value=\"asterix\">Astérix et Obélix</option>\n        </select>\n        <label>Category</label>\n      </div>\n      <br><br>\n      <div class=\"input-field\">\n        <div class=\"row\">\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">title</i>\n            <input type=\"text\" placeholder=\"Title\" id=\"title\" [(ngModel)]=\"product.title\" required name=\"title\">\n          </div>\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">person_pin</i>\n            <input type=\"text\" placeholder=\"Author\" id=\"author\" [(ngModel)]=\"product.author\" required name=\"author\">\n          </div>\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">euro_symbol</i>\n            <input type=\"text\" placeholder=\"Price\" id=\"price\" [(ngModel)]=\"product.price\" required name=\"price\">\n          </div>\n        </div>\n      </div>\n      <br><br>\n      <div class=\"input-field\">\n        <div class=\"row\">\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">image</i>\n            <input type=\"file\" id=\"file\" [(ngModel)]=\"product.file\" (change)=\"onFileSelected($event)\" required name=\"productPhoto\">\n            <br><br><br>\n            <li class=\"green-text\">File chosen: {{selectedFile.name}}</li>\n          </div>\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">edit</i>\n            <input type=\"text\" placeholder=\"ISBN\" id=\"isbn\" [(ngModel)]=\"product.isbn\" required name=\"isbn\">\n          </div>\n          <div class=\"col s12 m4\">\n            <i class=\"material-icons prefix\">edit</i>\n            <input type=\"text\" placeholder=\"Language\" id=\"language\" [(ngModel)]=\"product.language\" required name=\"language\">\n          </div>\n        </div>\n      </div>\n      <br><br>\n      <div class=\"input-field\">\n        <i class=\"material-icons prefix\">edit</i>\n        <input type=\"text\" placeholder=\"Small description\" id=\"description\" [(ngModel)]=\"product.description\" required name=\"description\">\n      </div>\n      <br><br>\n      <div class=\"input-field\">\n        <i class=\"material-icons prefix\">edit</i>\n        <textarea id=\"synopsis\" placeholder=\"Synopsis\" [(ngModel)]=\"product.synopsis\" required name=\"synopsis\" class=\"materialize-textarea\"></textarea>\n      </div>\n      <br><br>\n      <button onclick=\"M.toast({html: 'Product Added', classes: 'teal darken-3'})\" type=\"submit\" name=\"submit\" class=\"btn waves-effect waves-light right\" [disabled]=\"q.invalid\">Save<i class=\"material-icons right\">save</i></button>\n </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/new-product/new-product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/new-product/new-product.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ptext {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  color: #000;\n  font-size: 40px;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-shadow: 2px 2px black; }\n\n.pimg1 {\n  background-image: url(\"https://stmed.net/sites/default/files/comics-wallpapers-27542-7579279.jpg\");\n  min-height: 550px;\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.txt {\n  letter-spacing: 6px;\n  text-transform: uppercase;\n  color: #004d40; }\n\nsection {\n  width: 140%;\n  margin-left: -20%; }\n\n.transform1 {\n  transition: all 1s ease; }\n"

/***/ }),

/***/ "./src/app/new-product/new-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-product/new-product.component.ts ***!
  \******************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(router, productService, http, processHTTPMsgService, authService) {
        this.router = router;
        this.productService = productService;
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.authService = authService;
        this.product = { title: '', price: 0, description: '', file: '', author: '', isbn: '', language: '', synopsis: '', category: '' };
        this.selectedFile = null;
        this.marginTop = "300px";
    }
    NewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (errmess) { return _this.errMess = errmess; });
        this.authService.checkJWTtoken();
        setTimeout(function () {
            _this.marginTop = "0px";
        });
    };
    NewProductComponent.prototype.onSubmit = function () {
        var _this = this;
        if (confirm("Etes-vous sûr de vouloir ajouter ce nouveau produit?")) {
            this.uploadImage();
            if (this.selectedFile) {
                this.product.file = this.selectedFile.name;
            }
            this.productService.postProduct(this.product)
                .subscribe(function (res) {
                if (res.success) {
                    alert('Bien enregistré!');
                    _this.router.navigate(["home"]);
                }
                else {
                    console.log(res);
                }
            }, function (error) {
                console.log(error);
                _this.errMess = error;
            });
        }
        else {
            return null;
        }
    };
    NewProductComponent.prototype.refresh = function () {
        setTimeout(function () {
            location.reload();
        }, 500);
    };
    NewProductComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
    };
    NewProductComponent.prototype.uploadImage = function () {
        var fd = new FormData();
        fd.append('productPhoto', this.selectedFile, this.selectedFile.name);
        this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + "imageUpload", fd)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.scss */ "./src/app/new-product/new-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_6__["ProcessHTTPMsgService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/news-item/news-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/news-item/news-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"search\" class=\"transform\">\n\n  <div *ngIf=\"monde && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(254, 198, 46, 0.3); border-radius: 10px; border: 1px solid rgba(254, 198, 46, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"http://aqua-etiam.com/wp-content/uploads/2015/03/mondefr_ios_app.png\" style=\"max-height: 25px; margin-top: \"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"http://aqua-etiam.com/wp-content/uploads/2015/03/mondefr_ios_app.png\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"tech && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(23, 158, 25, 0.3); border-radius: 10px; border: 1px solid rgba(23, 158, 25, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"hacker && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(252, 102, 33, 0.3); border-radius: 10px; border: 1px solid rgba(252, 102, 33, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/d9/07/cb/d907cbab-a1b6-e857-6983-e65983d4307f/source/512x512bb.jpg\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/d9/07/cb/d907cbab-a1b6-e857-6983-e65983d4307f/source/512x512bb.jpg\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"equipe && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(212, 33, 22, 0.3); border-radius: 10px; border: 1px solid rgba(212, 33, 22, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://media.glassdoor.com/sqll/1132942/l-equipe-squarelogo-1456312416435.png\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://media.glassdoor.com/sqll/1132942/l-equipe-squarelogo-1456312416435.png\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"economist && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(252, 13, 27, 0.5); border-radius: 10px; border: 1px solid rgba(252, 13, 27, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/TheEconomistLogo.svg/2000px-TheEconomistLogo.svg.png\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/TheEconomistLogo.svg/2000px-TheEconomistLogo.svg.png\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"wallstreet && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(100, 100, 100, 0.3); border-radius: 10px; border: 1px solid rgba(100, 100, 100, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px; font-family: 'Times New Roman'\"><img src=\"https://www.romania-insider.com/wp-content/uploads/2015/03/wall-street-journal-logo.png\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://www.romania-insider.com/wp-content/uploads/2015/03/wall-street-journal-logo.png\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"wired && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(0, 0, 0, 0.6); border-radius: 10px; border: 1px solid rgb(0, 0, 0)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"white-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/2000px-Wired_logo.svg.png\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 128, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/2000px-Wired_logo.svg.png\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 128, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"radar && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(50, 111, 144, 0.3); border-radius: 10px; border: 1px solid rgba(50, 111, 144, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px;\"><img src=\"https://icon-locator.herokuapp.com/icon?url=http://www.techradar.com&size=70..120..200\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://icon-locator.herokuapp.com/icon?url=http://www.techradar.com&size=70..120..200\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"bbc && search\">\n    <div class=\"hoverable\" style=\"background-color: rgba(186, 28, 34, 0.5); border-radius: 10px; border: 1px solid rgba(186, 28, 34, 0.8)\">\n      <a href=\"{{url}}\" target=\"_blank\" class=\"black-text\">\n        <div *ngIf=\"!imageVerif\" class=\"row\">\n          <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://signaturecapital.co.uk/wp-content/uploads/2018/04/BBC-News.jpg\" style=\"max-height: 25px\"> {{title}}</p>\n          <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n        </div>\n        <div  *ngIf=\"imageVerif\" class=\"row\">\n          <div class=\"col s12 m2\">\n            <img class=\"hoverable\" src=\"{{image}}\" style=\"max-width: 190px; margin-top: 20px; border-radius: 5px\">\n          </div>\n          <div class=\"col s12 m10\">\n            <p style=\"font-size: 25px; margin: 5px\"><img src=\"https://signaturecapital.co.uk/wp-content/uploads/2018/04/BBC-News.jpg\" style=\"max-height: 25px\"> {{title}}</p>\n            <span style=\"color: rgba(220, 8, 19, 0.6); font-style: italic; margin-left: 5px\">{{date}}</span>\n            <p style=\"text-align: justify; opacity: 0.8; font-style: italic;\">{{description}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n\n\n<br>\n</div>\n"

/***/ }),

/***/ "./src/app/news-item/news-item.component.scss":
/*!****************************************************!*\
  !*** ./src/app/news-item/news-item.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transform {\n  transition: all 3s ease; }\n"

/***/ }),

/***/ "./src/app/news-item/news-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-item/news-item.component.ts ***!
  \**************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news/news.component */ "./src/app/news/news.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsItemComponent = /** @class */ (function () {
    function NewsItemComponent(newsComponent) {
        this.newsComponent = newsComponent;
        this.hacker = false;
        this.monde = false;
        this.equipe = false;
        this.tech = false;
        this.economist = false;
        this.wired = false;
        this.wallstreet = false;
        this.radar = false;
        this.bbc = false;
        this.search = true;
        this.imageVerif = false;
    }
    NewsItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.index);
        if (this.category == "hacker-news") {
            this.hacker = true;
        }
        else if (this.category == "techcrunch") {
            this.tech = true;
        }
        else if (this.category == "le-monde") {
            this.monde = true;
        }
        else if (this.category == "lequipe") {
            this.title.replace("s&#039;impose", "s'impose");
            this.equipe = true;
        }
        else if (this.category == "the-economist") {
            this.economist = true;
        }
        else if (this.category == "the-wall-street-journal") {
            this.wallstreet = true;
        }
        else if (this.category == "wired") {
            this.wired = true;
        }
        else if (this.category == "techradar") {
            this.radar = true;
        }
        else if (this.category == "bbc-news") {
            this.bbc = true;
        }
        if (this.image == null) {
            this.imageVerif = false;
        }
        else {
            this.imageVerif = true;
        }
        setInterval(function () {
            if (_this.category == "hacker-news" && _this.newsComponent.checkHacker == true || _this.category == "techcrunch" && _this.newsComponent.checkTech == true || _this.category == "le-monde" && _this.newsComponent.checkMonde == true ||
                _this.category == "lequipe" && _this.newsComponent.checkEquipe == true || _this.category == "the-economist" && _this.newsComponent.checkEconomist == true || _this.category == "the-wall-street-journal" && _this.newsComponent.checkWallstreet == true ||
                _this.category == "wired" && _this.newsComponent.checkWired == true || _this.category == "techradar" && _this.newsComponent.checkTechRadar == true || _this.category == "bbc-news" && _this.newsComponent.checkBBC == true) {
                if (_this.newsComponent.search != "" && _this.newsComponent.search != undefined) {
                    if (_this.title.toLowerCase().includes(_this.newsComponent.search.toLowerCase()) || _this.description != null && _this.description.toLowerCase().includes(_this.newsComponent.search.toLowerCase())) {
                        _this.search = true;
                    }
                    else {
                        _this.search = false;
                    }
                }
                else {
                    _this.search = true;
                }
            }
            else {
                _this.search = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsItemComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsItemComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsItemComponent.prototype, "date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsItemComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsItemComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NewsItemComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], NewsItemComponent.prototype, "index", void 0);
    NewsItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-item',
            template: __webpack_require__(/*! ./news-item.component.html */ "./src/app/news-item/news-item.component.html"),
            styles: [__webpack_require__(/*! ./news-item.component.scss */ "./src/app/news-item/news-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_news_news_component__WEBPACK_IMPORTED_MODULE_1__["NewsComponent"]])
    ], NewsItemComponent);
    return NewsItemComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <ul class=\"collapsible\">\n    <li>\n      <div class=\"collapsible-header\"><i class=\"material-icons\">search</i>Search Bar</div>\n      <div class=\"collapsible-body\">\n        <div class=\"row\">\n          <div class=\"col s11\">\n            <input placeholder=\"Search Articles\" type=\"text\" [(ngModel)]=\"search\">\n          </div>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"collapsible-header\"><i class=\"material-icons\">check_box</i>Search Sources</div>\n      <div class=\"collapsible-body\">\n        <p>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkEquipe\"/>\n            <span>L'équipe</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkMonde\"/>\n            <span>Le Monde</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkWallstreet\"/>\n            <span>The Worl Street Journal</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkEconomist\"/>\n            <span>The Economist</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkTech\"/>\n            <span>TechCrunch</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkHacker\"/>\n            <span>Hacker News</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkWired\"/>\n            <span>Wired</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkTechRadar\"/>\n            <span>Tech Radar</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n          <label>\n            <input type=\"checkbox\" [(ngModel)]=\"checkBBC\"/>\n            <span>BBC News</span>\n            <span style=\"opacity: 0\">aaa</span>\n          </label>\n        </p>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<button *ngIf=\"!wait\" (click)=\"getNews()\" class=\"btn-flat right\"><i class=\"fas fa-sync-alt\"></i></button>\n\n\n<img *ngIf=\"wait\" style=\"max-height: 200px; margin-top: 5%; margin-left: 40%\" src=\"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-18.gif\">\n\n<div *ngIf=\"wait\">\n  <br><br><br><br><br><br><br><br><br>\n</div>\n\n<br><br>\n\n<div [ngStyle]=\"{top: top}\">\n  <app-news-item\n    *ngFor = \"let new of news; let i = index\"\n    [url] = \"new.url\"\n    [title] = \"new.title\"\n    [description] = \"new.description\"\n    [date] = \"new.publishedAt\"\n    [category] =\"new.source.id\"\n    [image]=\"new.urlToImage\"\n    [index] = \"i\"\n  ></app-news-item>\n</div>\n"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/*!******************************************!*\
  !*** ./src/app/news/news.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = /** @class */ (function () {
    function NewsComponent(http) {
        this.http = http;
        this.wait = false;
        this.monde = true;
        this.figaro = true;
        this.checkEquipe = true;
        this.checkMonde = true;
        this.checkEconomist = true;
        this.checkWired = true;
        this.checkTech = true;
        this.checkHacker = true;
        this.checkWallstreet = true;
        this.checkTechRadar = true;
        this.checkBBC = true;
        this.top = "300px";
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNews();
        setInterval(function () {
            _this.getNews1();
        }, 10000);
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.top = "300px";
        this.wait = true;
        this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "fetch")
            .subscribe(function (news) {
            _this.news = news;
            _this.wait = false;
            _this.top = "0px";
        }, function (errmess) { return _this.errMess = errmess; });
    };
    NewsComponent.prototype.getNews1 = function () {
        var _this = this;
        this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + "fetch")
            .subscribe(function (news) {
            _this.news1 = news;
            _this.wait = false;
            if (_this.news1[0].title != _this.news[0].title) {
                _this.news = _this.news1;
            }
        }, function (errmess) { return _this.errMess = errmess; });
    };
    NewsComponent.prototype.test = function () {
        alert(this.checkEquipe);
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"transform1\" [ngStyle]=\"{opacity: opacity}\">\n<section class=\"section section-product transform1\">\n  <div class=\"row\">\n    <div class=\"col s12 m4 transform1\" [ngStyle]=\"{'margin-top': topPosition}\" style=\"margin-top: 300px\">\n      <img src=\"https://localhost:3443/images/{{product.imageName}}\" style=\"max-height: 400px; max-width: 300px\">\n    </div>\n    <div class=\"col s12 m5 transform1\"  [ngStyle]=\"{'margin-top': topPosition}\" style=\"margin-top: 300px\">\n      <h4>{{product.title}}</h4>\n      <p>by {{product.author}}</p>\n      <span><span style=\"font-weight: bold\">Price</span>: <span class=\"green-text\" style=\"font-style: italic\">{{product.price}}$</span></span><br><br>\n      <span><span style=\"font-weight: bold\">Langue</span>: {{product.language}}</span><br>\n      <span><span style=\"font-weight: bold\">ISBN</span>: {{product.isbn}}</span><br>\n      <span><span style=\"font-weight: bold\">Review</span>: <i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i><i class=\"fas fa-star\"></i></span><br>\n      <p style=\"text-align: justify\"><span style=\"font-weight: bold\">Synopsis</span>: {{product.synopsis}}</p><br>\n    </div>\n    <div class=\"transform1\" style=\"border: 4px solid rgba(150, 150, 150, 0.5); border-radius: 3%; position: fixed; width: 240px;\" [ngStyle]=\"{right: right}\">\n      <div style=\"margin: 5px\">\n        <span style=\"font-size: 19px\">Acheter neuf</span><span class=\"right green-text\" style=\"font-style: italic\">{{product.price}}$</span>\n        <div style=\"border-bottom: 1px solid black; width: 50px\"></div> <br>\n        <p style=\"text-align:center; width: 100%; font-size: 12px\">{{product.price}}$ + <span class=\"green-text\">FREE</span> shipping in France</p> <br>\n        <p class=\"red-text\">Only 3 left in stock - order soon</p><br>\n        <button class=\"btn-flat white-text\" style=\"background-color: green; text-align: center; width: 100%\" (click)=\"addCart()\">ADD to cart <i class=\"fas fa-cart-plus white-text\"></i></button><br>\n        <p>Deliver to: <span [ngStyle]=\"{color: addressColor}\">{{address}}</span></p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"transform1\"  [ngStyle]=\"{'margin-top': topPosition1}\" >\n  <app-author\n    *ngFor= \"let author of authors\"\n    [name]=\"author.name\"\n    [birth]=\"author.birth\"\n    [nationality]=\"author.nationality\"\n    [imageName]=\"author.imageName\"\n    [biography]=\"author.biography\"\n  ></app-author>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-star {\n  color: gold; }\n\nsection {\n  width: 120%; }\n\nspan {\n  text-align: justify; }\n\n.transform1 {\n  transition: all 1s ease; }\n\n.transform {\n  transition: all 0.6s ease; }\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/author.service */ "./src/app/services/author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(router, route, productService, appComponent, authorService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.appComponent = appComponent;
        this.authorService = authorService;
        this.authorList = [];
        this.authors = [];
        this.address = "Adresse non renseignée";
        this.right = "-250px";
        this.topPosition = "500px";
        this.topPosition1 = "1000px";
        this.opacity = 0;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get product with route id parameter
        this.id = this.route.snapshot.params['id'];
        this.productService.getProduct(this.id)
            .subscribe(function (product) { return _this.product = product; }, function (errmess) { return _this.errMess = errmess; });
        //get authors list 
        this.authorService.getAuthors()
            .subscribe(function (authors) { return _this.authorList = authors; }, function (errmess) { return _this.errMess = errmess; });
        setTimeout(function () {
            for (var i = 0; i < _this.authorList.length; i++) {
                if (_this.authorList[0].name.toLowerCase() === _this.product.author.toLowerCase()) {
                    _this.authors.push(_this.authorList[i]);
                }
            }
        }, 100);
        //address appear or not
        if (!localStorage.getItem('name')) {
            this.address = "Connectez-vous";
            this.addressColor = "green";
        }
        else if (localStorage.getItem('address')) {
            this.address = localStorage.getItem('address');
            this.addressColor = "green";
        }
        else {
            this.address = "Adresse non renseignée";
            this.addressColor = "red";
        }
        setTimeout(function () {
            _this.topPosition = "0px";
            _this.right = "10px";
            _this.opacity = 1;
            _this.topPosition1 = "0px";
        }, 500);
    };
    ProductDetailComponent.prototype.addCart = function () {
        this.inCart = "true";
        localStorage.setItem('inCart', this.inCart);
        this.router.navigate(['home']);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-model/product-model.component.html":
/*!************************************************************!*\
  !*** ./src/app/product-model/product-model.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card col s3 transform1\" style=\"width: 250px; margin: 10px; float: left\" [ngStyle]=\"{left: mLeft}\">\n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <img class=\"activator\" src=\"https://pbs.twimg.com/media/Diz4zEVXUAcf-AU.jpg\">\n    </div>\n    <div class=\"card-content\">\n      <span class=\"card-title activator grey-text text-darken-4\" style=\"font-style: italic\">14.99$<i class=\"material-icons right\">more_vert</i></span>\n      <p><a href=\"#\">En savoir plus</a></p>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">{{title}}<i class=\"material-icons right\">close</i></span>\n      <p>Une bande dessinée classique pleine de vi et d'humour</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-model/product-model.component.scss":
/*!************************************************************!*\
  !*** ./src/app/product-model/product-model.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transform1 {\n  transition: all 1s ease; }\n"

/***/ }),

/***/ "./src/app/product-model/product-model.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-model/product-model.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModelComponent", function() { return ProductModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductModelComponent = /** @class */ (function () {
    function ProductModelComponent(homePageComponent) {
        this.homePageComponent = homePageComponent;
        this.mLeft = '0px';
    }
    ProductModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var time = setInterval(function () {
            _this.mLeft = _this.homePageComponent.mLeftOther;
        }, 50);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductModelComponent.prototype, "title", void 0);
    ProductModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-model',
            template: __webpack_require__(/*! ./product-model.component.html */ "./src/app/product-model/product-model.component.html"),
            styles: [__webpack_require__(/*! ./product-model.component.scss */ "./src/app/product-model/product-model.component.scss")]
        }),
        __metadata("design:paramtypes", [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]])
    ], ProductModelComponent);
    return ProductModelComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('admin') == 'true') {
            return true;
        }
        else {
            this.router.navigate(['']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, UnauthorizedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedInterceptor", function() { return UnauthorizedInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(inj) {
        this.inj = inj;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        // Get the auth header from the service.
        var authToken = authService.getToken();
        console.log("Interceptor: " + authToken);
        // Clone the request to add the new header.
        var authReq = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + authToken) });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(inj) {
        this.inj = inj;
    }
    UnauthorizedInterceptor.prototype.intercept = function (req, next) {
        var authService = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var authToken = authService.getToken();
        return next
            .handle(req)
            .do(function (event) {
            // do nothing
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401 && authToken) {
                    console.log("Unauthorized Interceptor: ", err);
                    authService.checkJWTtoken();
                }
            }
        });
    };
    UnauthorizedInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], UnauthorizedInterceptor);
    return UnauthorizedInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;
;
var AuthService = /** @class */ (function () {
    function AuthService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.tokenKey = 'JWT';
        this.isAuthenticated = false;
        this.username = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authToken = undefined;
    }
    AuthService.prototype.checkJWTtoken = function () {
        var _this = this;
        this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + 'users/checkJWTtoken')
            .subscribe(function (res) {
            console.log("JWT Token Valid: ", res);
            _this.sendUsername(res.user.username);
        }, function (err) {
            console.log("JWT Token invalid: ", err);
            _this.destroyUserCredentials();
        });
    };
    AuthService.prototype.sendUsername = function (name) {
        this.username.next(name);
    };
    AuthService.prototype.clearUsername = function () {
        this.username.next(undefined);
    };
    AuthService.prototype.loadUserCredentials = function () {
        var credentials = JSON.parse(localStorage.getItem(this.tokenKey));
        console.log("loadUserCredentials ", credentials);
        if (credentials && credentials.username != undefined) {
            this.useCredentials(credentials);
            if (this.authToken)
                this.checkJWTtoken();
        }
    };
    AuthService.prototype.useCredentials = function (credentials) {
        this.isAuthenticated = true;
        this.sendUsername(credentials.username);
    };
    AuthService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.clearUsername();
        this.isAuthenticated = false;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('admin');
        localStorage.removeItem('name');
        localStorage.removeItem('address');
    };
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        return this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + 'users/signup', { "name": user.name, "address": user.address, "username": user.username, "password": user.password })
            .map(function (res) {
            return { 'success': true, 'username': user.username, 'address': user.address };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthService.prototype.logIn = function (user) {
        var _this = this;
        return this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + 'users/login', { "username": user.username, "password": user.password })
            .map(function (res) {
            localStorage.setItem('name', res.name);
            localStorage.setItem('token', res.token);
            localStorage.setItem('admin', res.admin);
            localStorage.setItem('address', res.address);
            _this.useCredentials({ username: user.username, token: res.token });
            _this.authToken = res.token;
            return { 'success': true, 'username': user.username, 'admin': res.admin, 'name': res.name };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthService.prototype.logOut = function () {
        this.destroyUserCredentials();
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUsername = function () {
        return this.username.asObservable();
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthorService = /** @class */ (function () {
    function AuthorService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.clicked = false;
    }
    AuthorService.prototype.ngOnInit = function () {
    };
    AuthorService.prototype.getAuthors = function () {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'authors')
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthorService.prototype.getAuthor = function (id) {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'authors/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthorService.prototype.postAuthor = function (author) {
        var _this = this;
        return this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'authors', { "name": author.name, "birth": author.birth, "biography": author.biography, "imageName": author.file, "nationality": author.nationality })
            .map(function (res) {
            return { 'success': true };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthorService.prototype.editAuthor = function (author, id) {
        var _this = this;
        return this.http.put(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'authors/' + id, { "name": author.name, "birth": author.birth, "biography": author.biography, "imageName": author.file, "nationality": author.nationality })
            .map(function (res) {
            return { 'success': true };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthorService.prototype.deleteAuthor = function (id) {
        var _this = this;
        return this.http.delete(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'authors/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthorService.prototype.getImage = function (id) {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'images/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactService = /** @class */ (function () {
    function ContactService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.contactSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.contact = [];
    }
    ContactService.prototype.getContacts = function () {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'contacts')
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ContactService.prototype.postContact = function (contact) {
        var _this = this;
        return this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'contacts', { "firstName": contact.firstName, "lastName": contact.lastName, "email": contact.email, "phone": contact.phone, "company": contact.company, "message": contact.message })
            .map(function (res) {
            return { 'success': true };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ContactService.prototype.deleteContact = function (id) {
        var _this = this;
        return this.http.delete(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'contacts/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/process-httpmsg.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_2__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMsg);
    };
    ProcessHTTPMsgService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = /** @class */ (function () {
    function ProductService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    ProductService.prototype.ngOnInit = function () {
    };
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'products')
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'products/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ProductService.prototype.postProduct = function (product) {
        var _this = this;
        return this.http.post(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'products', { "title": product.title, "imageName": product.file, "price": product.price, "description": product.description, "author": product.author,
            "language": product.language, "synopsis": product.synopsis, "isbn": product.isbn, "category": product.category })
            .map(function (res) {
            return { 'success': true };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ProductService.prototype.editProduct = function (product, id) {
        var _this = this;
        return this.http.put(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'products/' + id, { "id": product.id, "title": product.title, "imageName": product.file, "imageName2": product.file2, "imageName3": product.file3, "imageName4": product.file4, "price": product.price, "description": product.description,
            "connectivity": product.connectivity, "touchScreen": product.touchScreen, "payment": product.payment })
            .map(function (res) {
            return { 'success': true };
        })
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var _this = this;
        return this.http.delete(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'products/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ProductService.prototype.getImage = function (id) {
        var _this = this;
        return this.http.get(_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + 'images/' + id)
            .catch(function (error) { return _this.processHTTPMsgService.handleError(error); });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/tintin-model/tintin-model.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tintin-model/tintin-model.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card col s3 transform1\" (mouseover)=\"onHover()\" (mouseleave)=\"onLeave()\" style=\"width: 250px; margin: 10px; float: left\" [ngStyle]=\"{left: mLeft}\">\n    <div class=\"card-image waves-effect waves-block waves-light\" style=\"margin-top: 5px; margin-left: -5px; margin-right: -5px\">\n      <img class=\"activator transform\" src={{imageSource}}>\n    </div>\n    <div class=\"card-content transform\" [ngStyle]=\"{'margin-top': cardTop}\">\n      <button class=\"btn-flat\" style=\"border-radius: 5%; background-color: rgb(202, 8, 19); color: white; font-style: italic; font-size: 20px\" (click)=\"pTransition(_id)\">{{price}}$</button><i class=\"material-icons right\">more_vert</i>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">{{title}}<i class=\"material-icons right\">close</i></span>\n      <p>{{description}}</p>\n      <button class=\"btn-flat white-text right\" style=\"background-color: green; text-align: center; width: 100%\">{{price}}$<i class=\"fas fa-cart-plus white-text\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tintin-model/tintin-model.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/tintin-model/tintin-model.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transform1 {\n  transition: all 1s ease; }\n\n.transform {\n  transition: all 0.6s ease; }\n"

/***/ }),

/***/ "./src/app/tintin-model/tintin-model.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tintin-model/tintin-model.component.ts ***!
  \********************************************************/
/*! exports provided: TintinModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TintinModelComponent", function() { return TintinModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../baseurl */ "./src/app/baseurl.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TintinModelComponent = /** @class */ (function () {
    function TintinModelComponent(homePageComponent, productService, router) {
        this.homePageComponent = homePageComponent;
        this.productService = productService;
        this.router = router;
        this.mLeft = '0px';
        this.cardTop = "-80px";
    }
    TintinModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var time = setInterval(function () {
            _this.mLeft = _this.homePageComponent.mLeftTintin;
        }, 50);
        this.color = this.homePageComponent.color;
        this.imageSource = _baseurl__WEBPACK_IMPORTED_MODULE_4__["baseUrl"] + "images/" + this.imageName;
    };
    TintinModelComponent.prototype.pTransition = function (id) {
        var _this = this;
        localStorage.setItem('imageCart', this.imageSource);
        localStorage.setItem('priceCart', this.price);
        this.homePageComponent.startTop = "-500px";
        this.homePageComponent.opacity = 0;
        setTimeout(function () {
            _this.router.navigate(['livres/' + id]);
        }, 500);
    };
    TintinModelComponent.prototype.onHover = function () {
        this.cardTop = "0px";
    };
    TintinModelComponent.prototype.onLeave = function () {
        this.cardTop = "-80px";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "synopsis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "isbn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "author", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "imageName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TintinModelComponent.prototype, "_id", void 0);
    TintinModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tintin-model',
            template: __webpack_require__(/*! ./tintin-model.component.html */ "./src/app/tintin-model/tintin-model.component.html"),
            styles: [__webpack_require__(/*! ./tintin-model.component.scss */ "./src/app/tintin-model/tintin-model.component.scss")]
        }),
        __metadata("design:paramtypes", [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TintinModelComponent);
    return TintinModelComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthieu/Desktop/projet_web/my-web-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map