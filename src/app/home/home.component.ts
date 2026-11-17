import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedCategory: number = 0;
  questionAmount: number = 10;
  difficulty: string = 'any';

  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/questionnaire'], {
      queryParams: {
        category: this.selectedCategory,
        amount: this.questionAmount,
        difficulty: this.difficulty
      }
    });
  }
}