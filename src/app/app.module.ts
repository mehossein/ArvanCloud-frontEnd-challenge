// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { BASE_URL } from '@shared/tokens';
import { environment } from '@env/environment';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { AlertService } from '@shared/services';
import { AppRoutingModule } from './app.routing';

// Third-Party
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Third-Party
    ToastrModule.forRoot(),

    //app
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AlertService,
    { provide: BASE_URL, useValue: environment.baseUrl },
  ],
})
export class AppModule {}
