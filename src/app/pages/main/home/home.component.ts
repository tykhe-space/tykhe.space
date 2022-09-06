import { Component } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html'
})
export class HomeComponent {
	
	constructor(private _seoService: SeoService) { }

	ngOnInit(): void {
		this._seoService.updateTitle("TYKHE.SPACE");
		this._seoService.updateMeta('description', "TYKHE.SPACE");
		this._seoService.updateMeta('keywords', 'TYKHE.SPACE');
	}
}