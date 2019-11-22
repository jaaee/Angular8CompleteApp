import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './app.customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { ShareModule } from '../shared-artefacts/shared.module';
import { FilterTextBoxComponent} from "./customers-list/filter-texbox.component";
import { FormsModule} from '@angular/forms';
import { ServiceCoreModule } from './../services.core/service-core.module';
import { CustomerRoutingModule } from "./customer.routing.module";
import { CustomerFormComponent} from "./customer-form/customer-form.component";

@NgModule({
    declarations: [CustomersComponent,CustomersListComponent,FilterTextBoxComponent,CustomerFormComponent],
    imports: [CommonModule,ShareModule,FormsModule,ServiceCoreModule,CustomerRoutingModule],
    exports: [CustomersComponent]
})

export class CustomersModule{}