import { gCaretDownIcon } from './svg/caret-down';
import { gSearchIcon } from './svg/search';
import { gGrailedIcon } from './svg/grailed';
import { gHomeIcon } from './svg/home';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [gHomeIcon, gGrailedIcon, gSearchIcon, gCaretDownIcon],
      sizes: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '25px',
        xxl: '30px',
      },
      defaultSize: 'md',
    }),
  ],
  exports: [SvgIconsModule],
})
export class IconModule {}
