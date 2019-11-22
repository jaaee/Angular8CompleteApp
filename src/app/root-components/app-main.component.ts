import { Component} from '@angular/core';

@Component({
    selector:"app-main",
    template:`
    <table width='100%'>
    <tr>
    <td width='15%' <img src='./assets/logo.png' width='40px' height='40px/>
    </td>
    <td>
    <h2>{{appTitle}}</h2>
    </td>
    </tr>
    </table>
    `
})



export class AppHeaderComponent{
    appTitle : 'Customer Managment App'
}