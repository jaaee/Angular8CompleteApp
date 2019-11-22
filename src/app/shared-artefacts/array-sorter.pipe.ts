import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ICustomer } from "./businessobjects.interfaces"
@Pipe({
    name: "arraySorter"
})

export class ArraySorterPipe implements PipeTransform {

    transform(value: any[], sortProp: string) {
        if (value) {
            let arrCustomers: ICustomer[] = value;
            arrCustomers = arrCustomers.sort((a: any, b: any) => a[sortProp] > b[sortProp] ? 1 : -1)

            return arrCustomers;
        }

    }

}