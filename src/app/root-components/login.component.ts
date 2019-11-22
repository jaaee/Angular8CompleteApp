import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
    selector:"app-login",
    template:`
   UserId:<input type=text [(ngModel)] = 'userId'/>
   <br/>
   Password:<input type=text [(ngModel)] = 'password'/>
   <br/>
   <button (click)="login()">Login</button>
    `
})



export class LoginComponent{

    userId:string ="";
    password:string="";

        constructor(private router : Router ){}

    login(){

        localStorage.setItem("userId", "jaaee@gmail.com");

        this.router.navigateByUrl('/customers');

    }
   
}