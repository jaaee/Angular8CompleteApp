import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder} from '@angular/forms';
import { Order } from 'src/app/shared-artefacts/businessobjects.interfaces';
import { OrderDataService } from './../../services.core/order-data.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm : FormGroup;
  isSubmitted = false;
  model:Order;

  get formControls(){
    return this.orderForm.controls;
  }

  constructor(private orderDataService: OrderDataService,
    private formBuilder:FormBuilder,
    private route: Router) { }


    submitOrder(){
      console.log("ready to submit")
      if(this.orderForm.invalid){
        return
      }
      this.isSubmitted =true;

      this.orderDataService.addNewOrder(this.orderForm.value).subscribe((newOrder:Order)=>{
        this.model=newOrder;
        this.route.navigateByUrl("/orders")
      })


    }
  ngOnInit() {

    this.orderForm = this.formBuilder.group({
      id:[0,Validators.required],
      customerId:[1,Validators.required],
      productName:['shoes',Validators.required],
      quantity:[7,Validators.required],
      unitPrice:[532,Validators.required]
    })
  }

}
