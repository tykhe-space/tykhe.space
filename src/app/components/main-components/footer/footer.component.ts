import { Component, OnInit } from '@angular/core';
import { MenuItems, _menuData } from '../../../core/models/menuitem.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  menuData: Array<MenuItems> = _menuData;

  constructor() { }

  ngOnInit(): void {
  }

}
