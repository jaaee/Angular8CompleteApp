import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersDataService } from './customers-data.service';
import { OrderDataService } from './order-data.service';
import { HttpClientModule } from '@angular/common/http';
import { UserAndRolesService } from './authorize.service';

@NgModule({
    providers:[CustomersDataService,OrderDataService,UserAndRolesService],
    imports: [CommonModule,HttpClientModule]
})

export class ServiceCoreModule{}