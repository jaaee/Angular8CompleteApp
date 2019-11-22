
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError ,Subject} from 'rxjs';
import { ICustomer, Customer } from "./../shared-artefacts/businessobjects.interfaces"

import { map, catchError } from 'rxjs/operators';



@Injectable()
export class CustomersDataService {

    private luckyGenerator$: Observable<number>;

    customerApiUrl = "https://localhost:5001/api/customers";
    
    //"http://localhost:4200/assets/jsonFiles/customer.json"

    constructor(private httpSocket: HttpClient) { }

    getAllCustomer() : Observable<ICustomer[]> {
        return this.httpSocket.get<ICustomer[]>(this.customerApiUrl).pipe(
            catchError(this.handleError)
        );
    }

    getCustomerByName(filterText:string): Observable<ICustomer[]> {
        const url = "https://localhost:5001/api/customers/searchByName/" + filterText
        return this.httpSocket.get<ICustomer[]>(url).pipe(
            catchError(this.handleError)
        );
    }

    addNewCustomer(customer:Customer){
        let req={ "id": 201, "name": "Donald Trump", "city": "Seattle", "orderTotal": 237.32, "customerSince": "12-Nov-2019" }

        return this.httpSocket.post<any>(this.customerApiUrl,customer).pipe(
            catchError(this.handleError)
        );
    }

    public getLuckyNumber(): Observable<number> {
     
        if (!this.luckyGenerator$) {
          this.luckyGenerator$ = Observable.create((subject: Subject<number>) => {
            setInterval(() => {
              const number = Math.floor(Math.random() * 10);
              subject.next(number);
            }, 1000);
          });
        }
        return this.luckyGenerator$;
      }

    handleError(error: any) {
        console.log(error)
        return throwError(error)
    }

}