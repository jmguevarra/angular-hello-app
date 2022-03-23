import { Injectable } from "@angular/core";
import { CounterService } from "./counter.services";

@Injectable()
export class Users{
    users  =[
        {
            name: 'JM',
            status: 'Active'
        },
        {
            name: 'Alfred',
            status: 'Inactive'
        },
        {
            name: 'James',
            status: 'Active'
        },
        {
            name: 'Riza',
            status: 'Active'
        },
        {
            name: 'Beth',
            status: 'Inactive'
        },
        {
            name: 'Ashlyn',
            status: 'Active'
        },
    ];

    constructor(private counter: CounterService){}

    loadUsers(status: string){
        const activeUsers = this.users.filter(function(user){
            return user.status === status;
        });
        this.countUsers();
        return activeUsers;
    }

    setStatus(user: {name:string, status: string}, newStatus: string){
        this.users.forEach(function(currentUser){
            if(currentUser.name !== user.name){ return; }
            currentUser.status = newStatus;
        });
    }

    countUsers(){
        let totalUsers = this.users.length;
        let countActive = this.users.filter(function(user){
            return user.status === 'Active';
        });
       
        this.counter.setActiveUsers(countActive.length);
        this.counter.setInactiveUsers(totalUsers - countActive.length);
    }
}