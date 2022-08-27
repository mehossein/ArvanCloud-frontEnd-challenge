// angular
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// app
import { CookieHandler } from '@shared/classes';

@Injectable({ providedIn: 'root' })
export class ArticleGuard implements CanActivate {
  constructor(private readonly _router: Router) {}

  canActivate(): boolean {
    if (CookieHandler.getToken()) {
      return true;
    } else {
      this._router.navigate(['auth/login']);
      return false;
    }
  }
}
