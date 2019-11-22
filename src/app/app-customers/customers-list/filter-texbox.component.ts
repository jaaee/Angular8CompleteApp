import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
    template:`
    Filter:<input type='text' [(ngModel)]="filterCriteria"/>`
})

export class FilterTextBoxComponent implements OnInit{

    private m_filterCriteria:string="";

    get filterCriteria(){
        return this.m_filterCriteria
    }

    @Input()  set filterCriteria(val:any){
        this.m_filterCriteria = val;
        this.filterChanged.emit(val)
    }

    @Output() filterChanged:EventEmitter<string> = new  EventEmitter<string>();

    
    ngOnInit(){

    }

    
    
}