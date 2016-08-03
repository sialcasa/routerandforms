import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import {Validators} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-ueberweisung',
  templateUrl: 'ueberweisung.component.html',
  styleUrls: ['ueberweisung.component.css'],
  directives : [REACTIVE_FORM_DIRECTIVES]
})
export class UeberweisungComponent implements OnInit {

  transForm : FormGroup;

  constructor(private builder : FormBuilder) { }

  ngOnInit() {
    this.transForm = this.builder.group({
      name : ['',Validators.required],
      kontodaten: this.builder.group({
        iban : ['',Validators.compose([Validators.required, Validators.pattern('^DE([0-9a-zA-Z]\s?){20}$')])],
        bic : ['',Validators.compose([Validators.required,Validators.pattern('^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$')] )]
      })
    })
    this.transForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
    this.transForm.statusChanges.subscribe(
      (form: any) => {
        console.log('status changed to:', form);
      }
    );


  }
  //DE89370400440532013087
  //DABAIE2D

  onSubmit(values : any){
    console.log(values);
    alert('überweise'+values['kontodaten']['iban']);
  }

}
