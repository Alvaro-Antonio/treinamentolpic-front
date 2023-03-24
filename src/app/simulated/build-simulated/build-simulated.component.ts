import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, startWith, switchMap } from 'rxjs';
import { QuestionWithAlternatives } from '../questionWithAlternatives.model';
import { SimulatedService } from '../simulated.service';
import { merge, of as observableOf } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-build-simulated',
  templateUrl: './build-simulated.component.html',
  styleUrls: ['./build-simulated.component.css']
})
export class BuildSimulatedComponent implements OnInit, AfterViewInit {

  public updateTable = new EventEmitter();
  public visibleFeedback = true;

  public form: FormGroup;
 

  constructor(
    private repository : SimulatedService,
    private router : Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      title: [null, Validators.required],
      alternative : [null, Validators.required]
    });
  }
 
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

  postarDados() {
    const dados = this.form.value;
    console.log(dados);
  }

    
}
