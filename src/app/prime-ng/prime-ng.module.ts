import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    MenubarModule,
    MenuModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    CardModule,
  ],
  declarations: [],
  imports: [CommonModule],
})
export class PrimeNgModule {}
