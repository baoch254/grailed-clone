import { SvgIconsModule } from '@ngneat/svg-icon';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, SvgIconsModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class WebLayoutModule {}
