import { User } from './../../../../auth/shared/interface/user.interface';
// angular
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

// app
import { CookieHandler } from '@shared/classes/cookie.class';

@Component({
  selector: 'arvan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private readonly _router: Router) {}

  get getUsername(): string {
    return (
      JSON.parse(localStorage.getItem('user') as string)['username'] ?? 'user'
    );
  }

  onClickLogout(): void {
    CookieHandler.removeToken();
    this._router.navigate(['auth/login']);
  }
}
