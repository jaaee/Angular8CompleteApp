import {Pipe,PipeTransform} from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
    name:"nameTransform"
})

export class NameTransformPipe implements PipeTransform{

    transform(value:string)
    { let fullName: string = ""
       
        if(value){
            let firstName: string;
            firstName = value.split(' ')[0] ;
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
           
            let lastName : string
            lastName = value.split(' ')[1] ;
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
            fullName = lastName + "," + firstName
           return fullName
        }

       
    }

}