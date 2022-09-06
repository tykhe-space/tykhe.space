import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state);
    if (route.params['lang']) {
      if (["en", "EN", "tr", "TR", "de", "DE"].includes(route.params['lang'])) {
        window.localStorage.setItem('lang', route.params['lang']);
      } else {
        location.href = '';
      }
    }

    return true;
  }

}
