import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainComponentsModule } from '../components/main-components/main-components.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MainComponentsModule,
	],
	declarations: [
		MainLayoutComponent,
	],
	exports: [
		MainLayoutComponent
	]
})
export class LayoutsModule { }