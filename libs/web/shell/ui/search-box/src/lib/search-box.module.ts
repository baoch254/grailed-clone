import { SvgIconsModule } from '@ngneat/svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [CommonModule, SvgIconsModule, NzButtonModule],
  declarations: [SearchBoxComponent],
  exports: [SearchBoxComponent],
})
export class SearchBoxModule {}
