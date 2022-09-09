import { Routes } from '@angular/router';

//#region  Page component
import { HomeComponent } from '../../pages/main/home/home.component';
import { TykheTokenComponent } from 'src/app/pages/main/tykhe-token/tykhe-token.component';
//#endregion
export const MainLayoutRoutes: Routes = [
	{
		path: '', 
		component: HomeComponent,
	},
	{
		path: 'tykhe-token',
		component: TykheTokenComponent
	}
];