// angular
import { Injectable, Injector } from '@angular/core';

// Third-Party
import { Observable } from 'rxjs';

// app
import { ServiceBase } from '@shared/classes';
import { LoginModel, RegisterModel } from '../shared/interface';

@Injectable()
export class AuthApi extends ServiceBase {
  constructor(injector: Injector) {
    super(injector);
  }

  login(model: LoginModel): Observable<any> {
    return this.post$('users/login', model);
  }

  register(model: RegisterModel): Observable<any> {
    return this.post$('users', model);
  }
}
