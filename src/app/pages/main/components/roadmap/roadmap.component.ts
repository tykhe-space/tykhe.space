import { Component } from '@angular/core';
import { RoadmapItems, _data } from '../../../../core/models/roadmap.model';

@Component({
	selector: 'app-main-roadmap',
	templateUrl: './roadmap.component.html',
})
export class RoadmapComponent {
	items: Array<RoadmapItems> = _data;
	constructor() { }

	ngOnInit(): void {
		console.log(this.items);
console.log(this.items[0].childs)
	}
}