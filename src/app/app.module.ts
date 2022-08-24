// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// app
import { AppComponent } from './app.component';
import { AlertService } from '@shared/services';
import { AppRoutingModule } from './app.routing';

@NgModule({
  bootstrap: [AppComponent],
  providers: [AlertService],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
})
export class AppModule {}
