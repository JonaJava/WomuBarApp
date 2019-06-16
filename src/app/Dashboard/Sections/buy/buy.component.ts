import { Component, OnInit } from '@angular/core';
import{trigger,state,style,animate,transition,query,keyframes} from '@angular/animations';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
  animations:[]
})
export class BuyComponent implements OnInit {
  lista:number[]=[1,2,3,4,5,6,7,8,];
 
  constructor() { }

  ngOnInit() {
  }

}
