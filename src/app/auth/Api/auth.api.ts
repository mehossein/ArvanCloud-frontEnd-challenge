// angular
import { Injectable, Injector } from '@angular/core';

// Third-Party
import { Observable } from 'rxjs';

// app
import {
  User,
  LoginModel,
  responseType,
  RegisterModel,
} from '@app/auth/shared/interface';
import { ServiceBase } from '@shared/classes';

@Injectable()
export class AuthApi extends ServiceBase {
  constructor(injector: Injector) {
    super(injector);
  }

  //#region "auth api"

  login(model: LoginModel): Observable<responseType<User>> {
    return this.post$<responseType<LoginModel>, responseType<User>>(
      'users/login',
      {
        user: { ...model },
      }
    );
  }

  register(model: RegisterModel): Observable<responseType<User>> {
    return this.post$<responseType<RegisterModel>, responseType<User>>(
      'users',
      {
        user: { ...model },
      }
    );
  }

  //#endregion "auth api"
}
