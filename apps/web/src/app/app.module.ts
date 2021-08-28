import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { WebShellModule } from '@grailed/web/shell/feature';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, WebShellModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
