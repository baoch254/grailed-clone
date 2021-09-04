import { NavbarModule } from '@grailed/web/shell/ui/navbar';
import { HeaderModule } from '@grailed/web/shell/ui/header';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule,
    HeaderModule,
    NavbarModule,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebLayoutModule {}
