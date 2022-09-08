//#region Core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//#endregion

//#region  Export Modules
//#endregion

//#region Services
import { SeoService } from '../../../app/core/services/seo.service';

//#endregion
import { MainLayoutRoutes } from './main-layout.routing';

//#region Pages
import { HomeComponent } from '../../pages/main/home/home.component';
import { MainPageComponentsModule } from '../../pages/main/components/main-components.module';
import { TrustModule } from '../../core/pipes/trust-html/trust-html.module';
//#endregion

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MainLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MainPageComponentsModule,
        TranslateModule,
        TrustModule
    ],
    declarations: [
        //Components
        HomeComponent,
        
    ],
    providers: [
        //Services
        SeoService,
        MainPageComponentsModule,
    ]
})

export class MainLayoutModule { }