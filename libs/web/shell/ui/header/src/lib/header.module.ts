import { MenuModule } from '@grailed/web/shell/ui/menu';
import { SearchBoxModule } from '@grailed/web/shell/ui/search-box';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, SvgIconsModule, SearchBoxModule, MenuModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
