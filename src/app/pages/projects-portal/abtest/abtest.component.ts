import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abtest',
  templateUrl: './abtest.component.html',
  styleUrls: ['./abtest.component.scss']
})
export class AbtestComponent implements OnInit {

  constructor() { }
  variantTypes = ['color', 'background_color', 'text'];
  ngOnInit() {
  }
  submit(form) {
    localStorage.setItem("abtest", JSON.stringify(form));
  }

}
