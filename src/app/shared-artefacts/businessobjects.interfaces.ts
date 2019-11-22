export interface ICustomer{
    id:number,
    name:string,
    city:string,
    customerSince:Date,
    orderTotal:number
}

export interface IOrder{
    id:number,
    customerId:number,
    productName:string,
    quantity:number,
    unitPrice:number
}

export interface IUserAndRole{
    
    userId:string,
    password:string,
    userRole:string
}


export class Customer {
    id:number;
     name:string;
     city:string;
     customerSince:Date;
     orderTotal:number

    constructor(id:number,name:string,city:string,customerSince:Date,orderTotal:number){
        
        this.name=name;
        this.city=city,
        this.customerSince= customerSince,
        this.orderTotal=orderTotal
    }
}


export class Order {
    id:number;
     customerId:number;
     productName:string;
     quantity:number;
     unitPrice:number

    constructor( id:number,
        customerId:number,
        productName:string,
        quantity:number,
        unitPrice:number
   ){
        this.customerId = customerId
        this.productName=productName,
        this.quantity=quantity,
        this.unitPrice=unitPrice
    }
}