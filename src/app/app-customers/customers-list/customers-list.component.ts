import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared-artefacts/businessobjects.interfaces';
import { CustomersDataService } from "./../../services.core/customers-data.service";

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {

    title: string = "List of Customers"
    isVisible = false;
    isAscending = true;
    cusList
    // customers:ICustomer[];
    private m_customers: ICustomer[] = [];
    customerOrderTotal = 0;
    currencyCode = "INR";
    filterCustomer: ICustomer[] = [];

    number;

    get customers() {
        return this.m_customers;
    }

    @Input() set customers(val: ICustomer[]) {
        if (val) {
            this.filterCustomer = this.m_customers = val;
            this.calculateOrderTotals();
        }

    }

    constructor(private custService : CustomersDataService){}

    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }

    sortCustomers(sortProp) {
        if (this.filterCustomer) {
            if (this.isAscending) {
                this.filterCustomer.sort((a: any, b: any) => a[sortProp] > b[sortProp] ? 1 : -1)
            }
            else {
                this.filterCustomer.sort((a: any, b: any) => a[sortProp] < b[sortProp] ? 1 : -1)
            }
        }
        this.isAscending = !this.isAscending;
    }

    calculateOrderTotals() {

        if (this.filterCustomer) {
            this.filterCustomer.forEach((cust: ICustomer) => {
                this.customerOrderTotal += cust.orderTotal
            })
        }
    }
    ngOnInit() {

        // this.customers = [
        //     { id: 201, name: 'Donald Trump', city: 'Seattle', orderTotal: 237.32, customerSince: new Date(2010, 11, 26) },
        //     { id: 202, name: 'Justin', city: 'Montreal', orderTotal: 737.32, customerSince: new Date(2010, 11, 20) },
        //     { id: 203, name: 'Angela', city: 'Berlin', orderTotal: 937.32, customerSince: new Date(2010, 11, 23) },
        //     { id: 204, name: 'Modi', city: 'New Delhi', orderTotal: 137.32, customerSince: new Date(2010, 11, 24) },
        //     { id: 205, name: 'Rajapeksha', city: 'Colombi', orderTotal: 437.32, customerSince: new Date(2010, 11, 21) },
        //     { id: 206, name: 'Khan', city: 'Peshwar', orderTotal: 837.32, customerSince: new Date(2010, 11, 29) },


        // ]

        this.getNumber()

        this.calculateOrderTotals();

    }

    applyFilter(filterText: string) {

        // if (filterText) {
        //     console.log(filterText)
        //     this.filterCustomer = this.customers.filter((cust: ICustomer) => {
        //         return cust.id.toString().indexOf(filterText.toLocaleLowerCase()) > - 1 ||
        //             cust.name.toLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //             cust.city.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //             cust.customerSince.toString().indexOf(filterText.toLocaleLowerCase()) > -1 ||
        //             cust.orderTotal.toString().indexOf(filterText.toLocaleLowerCase()) > -1

        //     });
        // }
        // else {
        //     this.filterCustomer = this.m_customers;
        // }

        if(filterText){
            this.custService.getCustomerByName(filterText).subscribe((data : ICustomer[])=>{
                this.filterCustomer = data;
            })
        }
        else {
                this.filterCustomer = this.m_customers;
            }

        this.calculateOrderTotals();
    }

    saveList(){
        let myListString = JSON.stringify(this.filterCustomer)
        localStorage.setItem("myList",myListString )
    }

    loadList(){
        let strMyList = localStorage.getItem("myList");
        this.filterCustomer = JSON.parse(strMyList);
    }

    getNumber(){
        this.custService.getLuckyNumber().subscribe(number=>{
            this.number = number;
        })
    }

    calculateOrderTotalAsync(){
        const myWorker = new Worker('../../calculate-order-totals-ww.worker',{type:'module'})
        myWorker.onmessage=(message)=>{
            console.log("Received message on another thread",message.data)
        }
        myWorker.postMessage(this.calculateOrderTotalsSecond())
    }


    calculateOrderTotalsSecond(){

        if (this.filterCustomer) {
            this.filterCustomer.forEach((cust: ICustomer) => {
                this.customerOrderTotal += cust.orderTotal
                return this.customerOrderTotal
            })
        }

    }
    

}