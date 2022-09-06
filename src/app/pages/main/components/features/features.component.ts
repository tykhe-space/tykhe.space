import { Component } from '@angular/core';

@Component({
	selector: 'app-main-features',
	templateUrl: './features.component.html'
})
export class FeaturesComponent {

	selectedIndex: number = 0;
	
	constructor() { }

	ngOnInit(): void {
	}
}