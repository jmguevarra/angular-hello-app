import { Component, DoCheck, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.services';
import { Users } from 'src/app/shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: {name: string, status: string}[] = [];
  countUser: number = 0;

  constructor(private userObj: Users, private counter: CounterService) { }

  ngOnInit(): void {
    this.users = this.userObj.loadUsers('Inactive');
    this.countUser = this.counter.getInactiveUsers();
  }
  ngDoCheck(): void {
    this.users = this.userObj.loadUsers('Inactive');
    this.countUser = this.counter.getInactiveUsers();
  }

  setStatus(user: {name: string, status: string}, newStatus){
    this.userObj.setStatus(user, newStatus);
  }

}
