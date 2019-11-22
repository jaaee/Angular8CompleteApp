import { Component} from '@angular/core';

@Component({
    selector:"app-menu",
    template:`
    <table width='100%'>
    <tr height='10px'>
    <td  align='left'>
    <h4><a href="customers"> Customers</a></h4>
    </td>
    </tr>
    <tr height='10px'>
    <td  align='left'>
    <h4><a href="/orders"> Orders</a></h4>
    </td>
    </tr>
    <tr height='10px'>
    <td  align='left'>
    <h4><a href="aboutus"> About us</a></h4>
    </td>
    </tr>
    <tr height='10px'>
    <td  align='left'>
    <h4><a href="contactus"> Contact Us</a></h4>
    </td>
    </tr>
    </table>
    `
})



export class AppMenuComponent{
   
}