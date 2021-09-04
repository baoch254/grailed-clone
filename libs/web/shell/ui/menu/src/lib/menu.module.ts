import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, NzButtonModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
