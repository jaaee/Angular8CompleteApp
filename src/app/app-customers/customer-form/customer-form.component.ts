import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { Customer } from 'src/app/shared-artefacts/businessobjects.interfaces';
import { CustomersDataService } from 'src/app/services.core/customers-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  model:Customer
  diagnostics:string;
  constructor(private custDataService: CustomersDataService,private route: Router) { }

  ngOnInit() {

    this.model = new Customer(301,"King Kong", "mum" ,new Date(11,22,2019),572.33)
    // this.diagnostics = JSON.stringify(this.model);
  }

  submitForm(){

    this.custDataService.addNewCustomer(this.model).subscribe((cust:Customer)=>{

      this.model = cust;
      this.route.navigateByUrl("/customers")
    })

  }

}
