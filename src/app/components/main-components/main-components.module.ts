import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TrustModule } from '../../core/pipes/trust-html/trust-html.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		TrustModule,
		TranslateModule
	],
	declarations: [
		NavbarComponent,
		FooterComponent,
	],
	exports: [
        NavbarComponent,
		FooterComponent,
	],
	providers: [
	],
})
export class MainComponentsModule { }