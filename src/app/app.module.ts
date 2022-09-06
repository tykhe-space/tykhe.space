import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';


import { LayoutsModule } from './layouts/layouts.module';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    CoomingSoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
