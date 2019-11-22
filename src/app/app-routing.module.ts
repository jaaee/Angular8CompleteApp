import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './root-components/login.component';
import { GateKeeperGaurd} from './guards/gatekeeper.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", redirectTo:"/customers",canActivate:[GateKeeperGaurd]},
  {path:"*",pathMatch:"full", redirectTo:"/customers"},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
