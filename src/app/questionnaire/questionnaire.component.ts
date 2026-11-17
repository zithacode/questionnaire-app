import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionService } from '../core/service/question.service';
import { catchError, filter, map, tap, switchMap, takeUntil } from 'rxjs/operators';
import {Subject, throwError, of} from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit, OnDestroy {

  private categorySubject = new Subject<number>();
  private destroy$ = new Subject<void>();
  
  questions: any[] = [];

  loading = false;
  errorMessage = '';

  selectedAnswers: {[key:number]:string} = {};

  score = 0;
  submitted = false;

  currentQuestionIndex = 0;

  
  constructor(private questionService: QuestionService) { }

  submitAnswers(){
    this.score = 0;

    this.questions.forEach((question, index) =>{
      if(this.selectedAnswers[index] === question.correct_answer){
        this.score++;
      }
    });

    this.submitted = true;
  }

  nextQuestion(){
    if(this.currentQuestionIndex < this.questions.length -1){
      this.currentQuestionIndex++;
    }
  }
  previousQuestion(){
    if(this.currentQuestionIndex > 0){
      this.currentQuestionIndex--;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {

    this.categorySubject.pipe(
      tap(() => {
        this.loading = true;
        this.errorMessage = '';
      }),
      switchMap(categoryId => 
        this.questionService.getQuestions(categoryId).pipe(
          map(response => {
            if(response.response_code !== 0){
              throw new Error('Could not load questions');
            }
            return response.results;
          }),
          catchError(error =>{
            this.errorMessage = 'Failed to load questions.';
            return of([]);
          })
        )),
        takeUntil(this.destroy$)
    ).subscribe( ques=> {
      this.questions = ques.map((q: { incorrect_answers: any; correct_answer: any; }) => ({
        ...q,
        answers:this.shuffleAnswers([...q.incorrect_answers, q.correct_answer])
      }));
      this.loading = false;
      this.submitted = false;
    });


    this.categorySubject.next(9);

   /* this.questionService.getQuestions().pipe(
      filter(response => response.response_code === 0),
      tap(response => console.log('Api response:', response)),
      map(response => response.results),
      map(questions => questions.map((q: { difficulty: string; }) => ({
        ...q,
        difficulty:q.difficulty.toUpperCase()
      }))),
      catchError(error =>{
        console.log('Api failed', error);
        return throwError(error);
      })
    ).subscribe(questions =>{
      this.questions = questions;
    },
    error =>{
      console.log('Request failed',error);
    }
  
  );*/
  }

  selectAnswer(questionIndex:number, answer:string){
    this.selectedAnswers[questionIndex] = answer;
  }


  loadQuestions(categoryId: number){
    this.categorySubject.next(Number(categoryId));
  }

  restartQuiz(){
    this.selectedAnswers = {};
    this.score = 0;
    this.submitted = false;
    this.currentQuestionIndex = 0;
  }
  
  shuffleAnswers(answers: string[]):string[]{
    return answers.sort(()=> Math.random() - 0.5);
  }
}
