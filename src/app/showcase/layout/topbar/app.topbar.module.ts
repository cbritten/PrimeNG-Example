import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StyleClassModule } from 'primeng/styleclass';
import { AppTopBarComponent } from './app.topbar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        StyleClassModule, 
        MenubarModule
    ],
    exports: [AppTopBarComponent],
    declarations: [AppTopBarComponent]
})
export class AppTopbarModule {}
