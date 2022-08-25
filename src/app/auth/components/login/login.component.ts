// angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// app
import { AuthApi } from '@app/auth/Api';
import { AlertService } from '@shared/services';
import { CookieHandler } from '@shared/classes';
import { User } from '@app/auth/shared/interface';

@Component({
  selector: 'arvan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  pending: boolean = false;

  constructor(
    private readonly _router: Router,
    private readonly _authApi: AuthApi,
    private readonly _alertSrv: AlertService,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.pending) return;
      this.pending = true;
      this._authApi.login(this.form.value).subscribe({
        next: ({ user }) => {
          this.pending = false;
          CookieHandler.setToken(user.token as string);
          delete user.token;
          localStorage.setItem('user', JSON.stringify(user));
          this._router.navigate(['/articles']);
        },
        error: () => {
          this._alertSrv.warning('Email or password in invalid !');
          this.pending = false;
        },
      });
    } else {
      this._alertSrv.warning('From in invalid');
    }
  }

  getInputIsValid(name: string): boolean {
    return Boolean(
      this.form.get(name)?.invalid &&
        (this.form.get(name)?.touched || this.form.get(name)?.dirty)
    );
  }
}
