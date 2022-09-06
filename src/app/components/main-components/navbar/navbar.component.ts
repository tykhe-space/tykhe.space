import { Component, OnInit } from '@angular/core';
import { _menuData, MenuItems } from '../../../core/models/menuitem.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menuData: Array<MenuItems> = _menuData;

  menuShowStatus: boolean = false;
  langMenuShowStatus: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

}
