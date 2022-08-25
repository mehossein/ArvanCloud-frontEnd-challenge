// angular
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// app
import { AuthApi } from '@app/auth/Api';
import { AlertService } from '@shared/services';

@Component({
  selector: 'arvan-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      username: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.pending) return;
      this.pending = true;
      this._authApi.register(this.form.value).subscribe({
        next: () => {
          this.pending = false;
          this._alertSrv.success('Register SuccessFully');
          this._router.navigate(['/login']);
        },
        error: () => {
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
