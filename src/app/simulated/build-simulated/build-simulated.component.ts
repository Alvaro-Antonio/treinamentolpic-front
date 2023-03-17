import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, startWith, switchMap } from 'rxjs';
import { QuestionWithAlternatives } from '../questionWithAlternatives.model';
import { SimulatedService } from '../simulated.service';
import { merge, of as observableOf } from 'rxjs';

@Component({
  selector: 'app-build-simulated',
  templateUrl: './build-simulated.component.html',
  styleUrls: ['./build-simulated.component.css']
})
export class BuildSimulatedComponent implements OnInit, AfterViewInit {

  public updateTable = new EventEmitter();
  public visibleFeedback = true;
 

  constructor(
    private repository : SimulatedService,
    private router : Router,
    private route: ActivatedRoute,
  ){}
 
  questionsWithAlternatives : QuestionWithAlternatives []= []
  resultsLength = 0;
  isLoadingResults = true;

  ngOnInit(){
    
  }

  ngAfterViewInit() {
    
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
         return this.repository.getQuestionsWithAlternatives('1', 10)
        }),
        map((data ) => {
          this.isLoadingResults = false;
          this.resultsLength  = this.questionsWithAlternatives.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      )
      .subscribe((data) => {
        this.questionsWithAlternatives = data;
      });
    
  }

  isVisibleFeedback (){
        return this.visibleFeedback;
  }


    
}
