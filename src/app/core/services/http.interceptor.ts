// angular
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

// 3'rd party
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

// app
import { AlertService } from '@shared/services';
import { CookieHandler } from '@shared/classes';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  constructor(
    private readonly _router: Router,
    private readonly _alertSrv: AlertService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!window.navigator.onLine) {
      this._alertSrv.warning(
        'Internet connection failed. Please check your internet connection ... !'
      );
      return EMPTY;
    }

    const token = CookieHandler.getToken();

    let tokenizedRequest: HttpRequest<any> = request;
    if (!request.url.includes('articles')) {
      tokenizedRequest = request.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
        },
      });
    }

    return next.handle(tokenizedRequest).pipe(
      timeout(30000),
      catchError((error: HttpErrorResponse) => this._errorHandler(error))
    );
  }

  private _errorHandler(error: HttpErrorResponse): Observable<never> {
    switch (error.status) {
      case 404:
        this._alertSrv.warning('Sorry. Cannot find service!');
        return throwError(() => error);
      case 401:
        this._alertSrv.warning('Permission denied!');
        CookieHandler.removeToken();
        this._router.navigate(['auth/login']);
        return throwError(() => error);
      case 403:
        this._alertSrv.warning('You do not have permission !');
        return throwError(() => error);
      default:
        this._alertSrv.error(error.error.message);
        return throwError(() => error);
    }
  }
}
