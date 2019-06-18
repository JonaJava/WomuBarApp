import { Component, OnInit } from '@angular/core';
import{trigger,state,style,animate,transition,query,keyframes} from '@angular/animations';
import { UserService } from 'src/app/shared/user.service';
import { Buy } from 'src/app/models/buyModel';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
  animations:[]
})
export class BuyComponent implements OnInit {
  
  tableDetails: Buy[];
 
  constructor( private service: UserService) { }

  ngOnInit() {
   this.getTables();
  }
  getTables(){
  this.service.getTableBar().subscribe(
    res => {
      this.tableDetails = res as Buy[];
    },
    err => {
      console.log(err);
    },  
  );
  }

}
