// angular
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

// app
import { CookieHandler } from '@shared/classes';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    CookieHandler.removeToken();
    return true;
  }
}
