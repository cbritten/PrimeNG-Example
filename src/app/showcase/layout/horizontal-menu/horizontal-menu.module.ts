import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './horizontal-menu.component';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    HorizontalMenuComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class HorizontalMenuModule { }
