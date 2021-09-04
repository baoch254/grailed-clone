import { NzButtonModule } from 'ng-zorro-antd/button';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, SvgIconsModule, NzButtonModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class NavbarModule {}
