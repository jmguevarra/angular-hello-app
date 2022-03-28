import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'JM';
  strucDirective = 0;
  ngSwitchValue = 20;
  option = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
