import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersListComponent} from "./orders-list/orders-list.component";
import { GateKeeperGaurd } from '../guards/gatekeeper.guard';
import { OrdersAuthorizeGaurd} from '../guards/orders.authorize.guard';
import { OrderFormComponent } from "./order-form/order-form.component";

const routes: Routes = [
  {path:"orders",component:OrdersListComponent , canActivate:[GateKeeperGaurd,OrdersAuthorizeGaurd]},
  {path:"orders/:id",component:OrdersListComponent,canActivate:[OrdersAuthorizeGaurd]},
  {path:"new",component:OrderFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
