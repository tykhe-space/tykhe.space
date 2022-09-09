import { Component } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({
	selector: 'app-tykhe-token',
	templateUrl: './tykhe-token.component.html'
})
export class TykheTokenComponent {

	constructor(private _seoService: SeoService) { }

	ngOnInit(): void {
		this._seoService.updateTitle("TYKHE.SPACE");
		this._seoService.updateMeta('description', "TYKHE.SPACE | $TYKHE token");
		this._seoService.updateMeta('keywords', 'TYKHE.SPACE, token , tykhe token, crypto , lotto, gambling');
	}
}