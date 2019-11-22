import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from 'src/app/shared-artefacts/businessobjects.interfaces';
import { OrderDataService } from "./../../services.core/order-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-orders-list',
    templateUrl: './orders-list.component.html'
})

export class OrdersListComponent implements OnInit {

    title: string = "List of Orders"
    customerId:number =0;
    orders:IOrder[] = [];

    constructor(private orderService : OrderDataService,
        private route: ActivatedRoute){}
ngOnInit(){


    //
    this.customerId = +this.route.snapshot.paramMap.get("id")
    if( this.customerId > 0){
        this.orderService.getOrdersForCustomer(this.customerId).subscribe((custOrders:IOrder[])=>{
            this.orders = custOrders;
        })
    }
    else{
        this.getAllOrders();
    }
    
}
    
getAllOrders(){

    this.orderService.getAllOrder().subscribe((orders:IOrder[])=>{
        this.orders = orders;
    })
}

}