import { extModules } from './build-specifics/index.prod';
import { webShellRoutes } from './web-shell.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterModule.forRoot(webShellRoutes, {
      scrollPositionRestoration: 'top',
    }),
    ...extModules,
  ],
  exports: [],
  providers: [],
  declarations: [],
})
export class WebShellModule {}
