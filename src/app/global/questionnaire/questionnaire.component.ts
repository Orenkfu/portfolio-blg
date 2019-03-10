import { Answer } from './../../models/answer';
import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit, AfterContentInit {
  @Input('questions') questions: Question[];
  currentQuestion: Question
  currentQuestionIndex: number = 0;
  answers: Answer[] = [];
  result: any[];
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
  next(event: Answer) {
    this.currentQuestionIndex++;
    this.answers.push(event);
    console.log(this.currentQuestionIndex, this.questions.length);
    if (this.currentQuestionIndex === this.questions.length) {
      this.calculateResult();
      this.currentQuestion = null;
    } else {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }
  calculateResult(): any {
    let result = {}
    let finalResult = []
    for (const answer of this.answers) {
      for (const tag of answer.tags) {
        if (result[tag])
          result[tag]++
        else result[tag] = 1;
        if (finalResult.length < 3) {
          finalResult.push({ name: tag, value: result[tag] })
        } else {
          for (let i = 0; i < finalResult.length; i++) {
            const resultObj = finalResult[i];
            if (result[tag] > resultObj.value && !finalResult.find(resultObject => resultObject.name === tag)) {
              finalResult[i] = { name: tag, value: result[tag] };
              break;
            }
          }
        }
      }
    }
    this.result = finalResult;
    console.log(result);
  }
}
