import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-abtest',
  templateUrl: './abtest.component.html',
  styleUrls: ['./abtest.component.scss']
})
export class AbtestComponent implements OnInit {
  abForm;
  conversionID: FormControl;
  variantID: FormControl;
  variants: FormArray;
  track: FormControl;

  constructor(private _formBuilder: FormBuilder) {
    this.conversionID = new FormControl();
    this.variantID = new FormControl();
    this.variants = new FormArray([new FormControl()])
    this.track = new FormControl();

    this.abForm = _formBuilder.group({
      conversionID: this.conversionID,
      variantID: this.variantID,
      variants: this.variants,
      track: []
    })

   }
  variantTypes = ['color', 'background_color', 'text'];
  
  addVariant() {
    this.variants.push(new FormControl());
  }
  ngOnInit() {
  }
  submit(form) {
    console.log(form);
    localStorage.setItem("abtest", JSON.stringify(form));
  }

}
