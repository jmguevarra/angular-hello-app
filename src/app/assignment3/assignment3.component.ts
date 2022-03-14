import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showHint = false;
  hintLogs = [];

  constructor() { }
  ngOnInit(): void {}

  onShowHint(){
    const dt = new Date(Date.now()),
    month = dt.toLocaleString('default', {month: 'long'}),
    dateTimeStamp = `Date: ${month} ${dt.getDate()}, ${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;

    this.showHint = true;
    setTimeout(() => this.showHint = false, 3000);
    this.hintLogs.push(dateTimeStamp);
  }

}
