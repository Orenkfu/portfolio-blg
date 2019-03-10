import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input('result') result;
  constructor() { }

  ngOnInit() {
  }

}
