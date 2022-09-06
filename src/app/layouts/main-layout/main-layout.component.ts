import { Component, OnInit } from '@angular/core'
@Component({
	selector: 'app-main-layout',
	template: '<app-navbar></app-navbar><router-outlet></router-outlet><app-footer></app-footer>'
})
export class MainLayoutComponent implements OnInit {
	constructor() { }

	ngOnInit() {
	}
}