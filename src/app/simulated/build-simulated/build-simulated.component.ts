import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, startWith, switchMap } from 'rxjs';
import { QuestionWithAlternatives } from '../questionWithAlternatives.model';
import { SimulatedService } from '../simulated.service';
import { merge, of as observableOf } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/question/question.model';
import { Alternative } from 'src/app/alternative/alternative.model';
import { AnswerDTO } from 'src/app/simulated/simulated.model';

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
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef

  ){
    // this.form = this.fb.group({
    //   title: [null, Validators.required],
    //   alternative : [null, Validators.required]
    // });
    this.form = new FormGroup({});
    
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

        const formControlsAlternatives  = this.questionsWithAlternatives.map((question) => {
          return new FormControl(null, Validators.required);
        });
               
        formControlsAlternatives.forEach((control, index) => {
          this.form.addControl('answer' + index, control);
        });
        
      });
      
    
  }

  isVisibleFeedback (){
        return this.visibleFeedback;
  }

  postarDados() {
    const answers = [];
    for (const key in this.form.controls) {
      answers.push(this.form.controls[key].value);
    }

    console.log(answers);

    this.visibleFeedback = false;
    this.cdr.detectChanges();
  }

  convertFormControlInAnswerDTO(question : Question, alternative : Alternative) : AnswerDTO{
    const resp : AnswerDTO = Object();
    resp.question = question;
    resp.alternativeSelected = alternative;

    return resp;

  }

    
}
