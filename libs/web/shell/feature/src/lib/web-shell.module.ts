import { WebLayoutModule } from '@grailed/web/shell/ui/layout';
import { extModules } from './build-specifics/index';
import { webShellRoutes } from './web-shell.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { IconModule } from '@grailed/web/shared/ui/icon';

@NgModule({
  imports: [
    CommonModule,
    WebLayoutModule,
    IconModule,
    NoopAnimationsModule,
    RouterModule.forRoot(webShellRoutes, {
      scrollPositionRestoration: 'top',
    }),
    ...extModules,
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [],
})
export class WebShellModule {}
