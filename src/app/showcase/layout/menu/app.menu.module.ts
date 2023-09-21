import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { StyleClassModule } from 'primeng/styleclass';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuItemComponent } from './app.menuitem.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    imports: [
        CommonModule, 
        StyleClassModule, 
        RouterModule, 
        AutoCompleteModule,
        MenuModule,
        MenubarModule
    ],
    exports: [AppMenuComponent],
    declarations: [AppMenuComponent, AppMenuItemComponent]
})
export class AppMenuModule {}
