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

    loadUsers(status: string){
        const activeUsers = this.users.filter(function(user){
            return user.status === status;
        });
        
        return activeUsers;
    }

    setStatus(user: {name:string, status: string}, newStatus: string){
        this.users.forEach(function(currentUser){
            if(currentUser.name !== user.name){ return; }
            currentUser.status = newStatus;
        });
    }

}