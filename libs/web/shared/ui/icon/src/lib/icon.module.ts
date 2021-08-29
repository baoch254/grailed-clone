import { gHomeIcon } from './svg/home';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [gHomeIcon],
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconModule {}
