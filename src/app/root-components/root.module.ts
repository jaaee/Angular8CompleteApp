import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderComponent } from './app-header.component';
import { AppFooterComponent } from './app-footer.component';
import { AppMenuComponent } from './app-menu.component';
import {LoginComponent} from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppHeaderComponent,AppFooterComponent,AppMenuComponent,LoginComponent],
    imports: [CommonModule,FormsModule],
    exports: [AppHeaderComponent,AppFooterComponent,AppMenuComponent,LoginComponent]
})

export class AppRootModule{}