import { Routes } from '@angular/router';

//#region  Page component
import { HomeComponent } from '../../pages/main/home/home.component';

//#endregion
export const MainLayoutRoutes: Routes = [
	{
		path: '', component: HomeComponent,
	}
];