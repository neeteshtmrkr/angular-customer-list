import {Component, OnInit} from '@angular/core'

//component decorator
@Component({
    selector:'filter-textbox',
    template:`
        Filter: <input type="text"/>
    `
})

export class FilterTextboxComponent implements OnInit{
    
    constructor(){}
    
    ngOnInit(){

    }
}