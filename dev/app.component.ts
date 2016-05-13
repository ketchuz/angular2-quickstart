import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from '@angular/router-deprecated';
import {HomeComponent} from './home/home.component'

@Component({
    selector: 'my-app',
    templateUrl: 'dev/app.tpl.html',
    directives: [ ROUTER_DIRECTIVES, RouterOutlet]
})
@RouteConfig([
	{path: '/home', component: HomeComponent, name: 'Home'}
])
export class AppComponent {

}