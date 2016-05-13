"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_component_1 = require('./home/home.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'dev/app.tpl.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, router_deprecated_1.RouterOutlet]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', component: home_component_1.HomeComponent, name: 'Home' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBMkQsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RiwrQkFBNEIsdUJBRTVCLENBQUMsQ0FGa0Q7QUFVbkQ7SUFBQTtJQUVBLENBQUM7SUFWRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLFVBQVUsRUFBRSxDQUFFLHFDQUFpQixFQUFFLGdDQUFZLENBQUM7U0FDakQsQ0FBQztRQUNELCtCQUFXLENBQUM7WUFDWixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztTQUN2RCxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyT3V0bGV0fSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L2FwcC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogWyBST1VURVJfRElSRUNUSVZFUywgUm91dGVyT3V0bGV0XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHtwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIG5hbWU6ICdIb21lJ31cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
