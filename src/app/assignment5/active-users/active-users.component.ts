import { Component, DoCheck, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Users } from 'src/app/shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, DoCheck{
  users: {name: string, status: string}[] = [];

  constructor(private userObj: Users) { }

  ngOnInit(): void {
    this.users = this.userObj.loadUsers('Active');
  }
  ngDoCheck(): void {
    this.users = this.userObj.loadUsers('Active');
  }

  setStatus(user: {name: string, status: string}, newStatus){
    this.userObj.setStatus(user, newStatus);
  }

}
