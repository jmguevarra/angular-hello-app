import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-binding',
  templateUrl: './output-binding.component.html',
  styleUrls: ['./output-binding.component.css']
})
export class OutputBindingComponent implements OnInit {
  @Output('evtServCreated') eventServerCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('evtBpCreated') eventBlpCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddedServer(serverNameInput){
    console.log(serverNameInput); //retrive the local tag itself; 

    this.eventServerCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent 
    });
  }

  onAddedBlueprint(serverNameInput){
    this.eventBlpCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent 
    });
  }

}
