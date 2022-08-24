// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { AppComponent } from './app.component';
import { AlertService } from '@shared/services';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app.routing';

// 3'rd party
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // 3'rd party
    ToastrModule.forRoot(),

    //app
    CoreModule,
  ],
  bootstrap: [AppComponent],
  providers: [AlertService],
})
export class AppModule {}
