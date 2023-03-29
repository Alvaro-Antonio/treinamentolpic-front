import { AfterViewInit, Component, OnInit } from '@angular/core';
import { catchError, map, merge, startWith, switchMap } from 'rxjs';
import { Indicators } from '../indicators/indicators.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit{
   public indicators : Indicators =  Object();;

  constructor(
    private repository : UserService
  ){
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {    
  
     this.repository.getIndicators('1')
      .subscribe((data) => {
        this.indicators = data;
        console.log(this.indicators)        
      });
      
    
  }
  
}
function observableOf(arg0: never[]): any {
  throw new Error('Function not implemented.');
}

