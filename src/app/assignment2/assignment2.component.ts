import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
})
export class Assignment2Component implements OnInit {
  username = 'jmguevarra22';
  isFieldReset  = false;

  constructor() { }

  ngOnInit(): void {}

  onUpdateUsername(event){
    let tagValue = event.target.value;
    //console.log(event.target.value);
    this.username = tagValue;
    this.isFieldReset = this.resetFields(tagValue);
  }

  resetFields = (tagValue: string) => (tagValue == '' ? true : false);
  onResetField = () => this.username = '';



}
