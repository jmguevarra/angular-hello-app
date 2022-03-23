import { Component, DoCheck, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: {name: string, status: string}[] = [];

  constructor(private userObj: Users) { }

  ngOnInit(): void {
    this.users = this.userObj.loadUsers('Inactive');
  }
  ngDoCheck(): void {
    this.users = this.userObj.loadUsers('Inactive');
  }

  setStatus(user: {name: string, status: string}, newStatus){
    this.userObj.setStatus(user, newStatus);
  }

}
