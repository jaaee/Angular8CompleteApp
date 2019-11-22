import { Component} from '@angular/core';

@Component({
    selector:"app-footer",
    template:`
    <table width='100%'>
    <tr>
    <td  align='center'>
    <h2><i>&copy;{{footer}}</i></h2>
    </td>
    </tr>
    </table>
    `
})



export class AppFooterComponent{
    footer : string = 'Jaaee '
}