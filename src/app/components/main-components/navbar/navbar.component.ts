import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { _menuData, MenuItems } from '../../../core/models/menuitem.model';
import { LangItems, _data } from '../../../core/models/lang.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menuData: Array<MenuItems> = _menuData;
  langData: Array<LangItems> = _data;

  menuShowStatus: boolean = false;
  langMenuShowStatus: boolean = false;
  currentLang: string = "en";

  constructor(private translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.translate);
    if (window.localStorage.getItem('currentLang')) {
      this.currentLang = window.localStorage.getItem('currentLang') || 'en';
      this.translate.use(this.currentLang);
    }

  }
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.langMenuShowStatus = !this.langMenuShowStatus;
    this.router.navigateByUrl(lang);

  }

  getLangItem(lang: string): LangItems {
    return this.langData.filter(x => x.name == lang)[0];
  }
}
