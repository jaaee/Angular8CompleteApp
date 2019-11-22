import { Component , OnInit } from '@angular/core';
import { ICustomer } from '../shared-artefacts/businessobjects.interfaces';
import { CustomersDataService } from "./../services.core/customers-data.service";

@Component({
    selector:'app-customers',
    templateUrl : './app.customers.component.html'
})

export class CustomersComponent implements OnInit{

    title:String ="Customers"
    lstCustomers: ICustomer[];

    constructor(private custService : CustomersDataService){}
   
    ngOnInit(){

        // this.lstCustomers = [
        //     { id:206,name:'Donald Trump', city:'Seattle', orderTotal:237.32,customerSince:new Date(2010,11,26)},
        //     { id:202,name:'Justin RS', city:'Montreal', orderTotal:737.32,customerSince:new Date(2010,11,20)},
        //     { id:203,name:'Angela SR', city:'Berlin', orderTotal:937.32,customerSince:new Date(2010,11,23)},
        //     { id:204,name:'Modi KM', city:'New Delhi', orderTotal:137.32,customerSince:new Date(2010,11,24)},
        //     { id:205,name:'Rajapeksha MN', city:'Colombi', orderTotal:437.32,customerSince:new Date(2010,11,21)},
        //     { id:201,name:'Khan Jl', city:'Peshwar', orderTotal:837.32,customerSince:new Date(2010,11,29)},

        
        // ]
this.getAllCustomer();
        
    }

    getAllCustomer(){
        this.custService.getAllCustomer().subscribe((cust:ICustomer[])=>{
            this.lstCustomers =cust;
        })
    }

    addNewCustomer(){

        // this.custService.addNewCustomer().subscribe(data=>{
        //     this.getAllCustomer();
        // })

    }

}