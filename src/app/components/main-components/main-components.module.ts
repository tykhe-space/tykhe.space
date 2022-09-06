import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		NavbarComponent,
		FooterComponent,
	],
	exports: [
        NavbarComponent,
		FooterComponent,
	],
	providers: [],
})
export class MainComponentsModule { }