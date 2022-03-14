import { Component, OnInit } from "@angular/core";

@Component({
    selector :  'app-server',
    templateUrl : './server-component.html',
})
export class ServerComponent implements OnInit{
    isCreated = true;
    serverCreationStatus = 'No Server Created';
    serverName = 'JM Server';

    constructor() {
        setTimeout(()=>{
            this.isCreated = false;
        }, 3000);
    }
    ngOnInit(): void { }

    
    onCreateServer(){
        this.serverCreationStatus = 'Server Created';
    }

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
        
    }
}