import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// export interface Question{
//   category:string;
//   type:string;
//   difficulty:string;
//   question:string;
//   correct_answer:string;
//   incorrect_answers:string[];
// }

// export interface TriviaResponse{
//   response_code:number;
//   results:Question[];
// }
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient) { }


  getQuestions(categoryId: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}&category=${categoryId}`);
  }
}
