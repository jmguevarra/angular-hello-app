import { Component, DoCheck, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { CounterService } from 'src/app/shared/counter.services';
import { Users } from 'src/app/shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, DoCheck{
  users: {name: string, status: string}[] = [];
  countUser: number = 0;

  constructor(private userObj: Users, private counter: CounterService) { }

  ngOnInit(): void {
    this.users = this.userObj.loadUsers('Active');
    this.countUser = this.counter.getActiveUsers();
  }
  ngDoCheck(): void {
    this.users = this.userObj.loadUsers('Active');
    this.countUser = this.counter.getActiveUsers();
  }

  setStatus(user: {name: string, status: string}, newStatus){
    this.userObj.setStatus(user, newStatus);
  }

}
