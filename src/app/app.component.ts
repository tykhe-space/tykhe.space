import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'tykhe.space';

  constructor(private translate: TranslateService){
     // Register translation languages
     translate.addLangs(['en', 'tr', 'de']);
     // Set default language
     translate.setDefaultLang('en');
     translate.currentLang = 'en';
  }
}
