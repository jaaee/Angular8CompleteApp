import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from "./app.customers.component";
import { GateKeeperGaurd } from '../guards/gatekeeper.guard';
import { CustomerFormComponent} from "./customer-form/customer-form.component"

const routes: Routes = [
  {path:"customers",component:CustomersComponent , canActivate:[GateKeeperGaurd]},
  {path:"customers/new",component:CustomerFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
