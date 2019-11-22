import { Component} from '@angular/core';

@Component({
    selector:"app-header",
    template:`
    <table width='100%'>
    <tr>
    <td width='15%' align='center'> <img src='./assets/logo.jfif' width='40px' height='40px'/>
    </td>
    <td>
    <h2>{{title}}</h2>
    </td>
    </tr>
    </table>
    `
})



export class AppHeaderComponent{
    title :string = 'Customer Managment App'
}