import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, startWith, switchMap } from 'rxjs';
import { QuestionWithAlternatives } from '../questionWithAlternatives.model';
import { SimulatedService } from '../simulated.service';
import { merge, of as observableOf } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/question/question.model';
import { Alternative } from 'src/app/alternative/alternative.model';
import { AnswerDTO, SimulatedAnswersDTO } from 'src/app/simulated/simulated.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-build-simulated',
  templateUrl: './build-simulated.component.html',
  styleUrls: ['./build-simulated.component.css']
})
export class BuildSimulatedComponent implements OnInit, AfterViewInit {

  public updateTable = new EventEmitter();
  public visibleFeedback = false;
  public form: FormGroup;

  questionsWithAlternatives : QuestionWithAlternatives []= []
  resultsLength = 0;
  isLoadingResults = true;
  simulatedFeedback = new Object as SimulatedAnswersDTO;
  

  constructor(
    private repository : SimulatedService,
    private router : Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    
    

  ){

    this.form = new FormGroup({});
    //this.simulatedFeedback as SimulatedAnswersDTO;
    
  }

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

  async postarDados() {
    const answers : AnswerDTO [] = [];
    for (const key in this.form.controls) {
      answers.push(this.form.controls[key].value);
      console.log(answers);
    }

     
    this.repository.sendAnswers('1',answers).subscribe(async result => {

      await this.setFeedbackSimulated(result);

      this.simulatedFeedback = result;
      this.toastr.success(`${result.score}`, 'Sua Pontuação Foi', {
        closeButton: true,
        progressBar: true,
      });
    });
    this.visibleFeedback = true;
    this.cdr.detectChanges();    
  }

  async setFeedbackSimulated (simulated : SimulatedAnswersDTO) : Promise<void> {
    this.simulatedFeedback = simulated;
  }

  convertFormControlInAnswerDTO(question : Question, alternative : Alternative) : AnswerDTO{
    const resp : AnswerDTO = Object();
    resp.question = question;
    resp.alternativeSelected = alternative;

    return resp;

  }

  iconSimulatedAnswers(alternative : Alternative, alternativeSelected : Alternative): [String,String]{
    
    if(alternative.correct){
      const icon = 'checked_circle';
      const color = 'green';
      return [icon, color] ;
    }else if(alternative.id == alternativeSelected.id){
      const icon = 'radio_button_checked';
      const color = 'red';
      return [icon, color] ;
    }
    const icon = 'radio_button_unchecked';
    const color = 'black';
    return [icon, color] ;
  }

    
}
