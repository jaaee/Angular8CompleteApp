import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ShareModule } from '../shared-artefacts/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceCoreModule } from './../services.core/service-core.module';
import { OrderRoutingModule } from "./order.routing.module";
import { OrdersAuthorizeGaurd } from "./../guards/orders.authorize.guard";
import { OrderFormComponent } from "./order-form/order-form.component"

@NgModule({
    declarations: [OrdersListComponent,OrderFormComponent],
    imports: [CommonModule,ShareModule,FormsModule,ServiceCoreModule,OrderRoutingModule,ReactiveFormsModule,FormsModule],
    providers: [OrdersAuthorizeGaurd],
    exports: [OrdersListComponent,OrderFormComponent]
})

export class OrdersModule{}