// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { AppComponent } from './app.component';
import { AlertService } from '@shared/services';
import { AppRoutingModule } from './app.routing';

// 3'rd party
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  bootstrap: [AppComponent],
  providers: [AlertService],
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // 3'rd party
    ToastrModule.forRoot(),
  ],
})
export class AppModule {}
