import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SecondryFeatureItems, _data } from '../../../../core/models/secondry-features.model'
@Component({
	selector: 'app-main-secondry-features',
	templateUrl: './secondry-features.component.html',
})
export class SecondryFeaturesComponent {
	items: Array<SecondryFeatureItems> = _data;
	selectedIndex: number = 0;

	constructor(private _translate: TranslateService) { }

	ngOnInit(): void {
	}
}