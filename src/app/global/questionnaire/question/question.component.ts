import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('question') question;
  @Output('choose') answerQuestion: EventEmitter<any>;
  constructor() {
    this.answerQuestion = new EventEmitter();
  }
  choose(answer) {
    this.answerQuestion.emit(answer);
  }
  ngOnInit() {
  }

}
