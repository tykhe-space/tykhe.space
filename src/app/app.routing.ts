import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LangGuardGuard } from './core/guards/lang-guard.guard';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';


const routes: Routes = [
	{
		path: ':lang',
		component: MainLayoutComponent,
		canActivate: [LangGuardGuard],
		children: [{
			path: '',
			loadChildren: () => import('./layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)
		}]
	}, {
		path: '',
		component: MainLayoutComponent,
		canActivate: [LangGuardGuard],
		children: [{
			path: '',
			loadChildren: () => import('./layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)
		}]
	},
	{ path: '**', redirectTo: 'en' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			anchorScrolling: 'enabled',
			scrollPositionRestoration: 'enabled'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }