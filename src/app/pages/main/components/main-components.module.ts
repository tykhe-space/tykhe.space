import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TrustHtmlPipe } from '../../../core/pipes/trust-html/trust-html.pipe';

import { FeaturesComponent } from './features/features.component';
import { SecondryFeaturesComponent } from './secondry-features/secondry-features.component';
import { JoinOurCommunityComponent } from './join-our-community/join-our-community.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TechnologiesBehindTykhenSpaceComponent } from './technologies-behind-tykhen-space/technologies-behind-tykhen-space.component';
import { TrustModule } from '../../../core/pipes/trust-html/trust-html.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		TranslateModule,
		TrustModule
	],
	declarations: [
		FeaturesComponent,
		SecondryFeaturesComponent,
		JoinOurCommunityComponent,
		RoadmapComponent,
		TechnologiesBehindTykhenSpaceComponent
	],
	exports: [
		FeaturesComponent,
		SecondryFeaturesComponent,
		JoinOurCommunityComponent,
		RoadmapComponent,
		TechnologiesBehindTykhenSpaceComponent
	],
	providers: [],
})
export class MainPageComponentsModule { }