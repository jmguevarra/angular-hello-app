export class CounterService{
    allActiveUsers: number = 0;
    allInactiveUsers: number = 0;

    setActiveUsers(countUsers: number){
        this.allActiveUsers = countUsers;
    }
    getActiveUsers(){
        return this.allActiveUsers;
    }

    setInactiveUsers(countUsers: number){
        this.allInactiveUsers = countUsers
    }
    getInactiveUsers(){
        return this.allInactiveUsers;
    }
}