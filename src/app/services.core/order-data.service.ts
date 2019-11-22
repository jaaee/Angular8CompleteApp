
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IOrder, Order } from "./../shared-artefacts/businessobjects.interfaces"

import { map, catchError } from 'rxjs/operators';
import { CustomersDataService } from './customers-data.service';



@Injectable()
export class OrderDataService {

    orderApiUrl = "https://localhost:5001/api/orders";
    

    constructor(private httpSocket: HttpClient) { }

    getAllOrder() : Observable<IOrder[]> {
        return this.httpSocket.get<IOrder[]>(this.orderApiUrl).pipe(
            catchError(this.handleError)
        );
    }

    getOrdersForCustomer(custId : number): Observable<IOrder[]> {
        return this.httpSocket.get<IOrder[]>(this.orderApiUrl + "/" +custId.toString()).pipe(
            catchError(this.handleError)
        );
    }

    addNewOrder(order:Order){

        return this.httpSocket.post<any>(this.orderApiUrl,order).pipe(
            catchError(this.handleError)
        );
    }


    handleError(error: any) {
        console.log(error)
        return throwError(error)
    }

}