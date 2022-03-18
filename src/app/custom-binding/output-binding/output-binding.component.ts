import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-binding',
  templateUrl: './output-binding.component.html',
  styleUrls: ['./output-binding.component.css']
})
export class OutputBindingComponent implements OnInit {
  @Output('evtServCreated') eventServerCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('evtBpCreated') eventBlpCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = ''; //use in 2 way binding with [(ngModel)]
  //newServerContent = ''; //use in 2 way binding with [(ngModel)]
  @ViewChild('serverChildContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddedServer(serverNameInput: HTMLInputElement){
    console.log(serverNameInput); //retrive the local tag itself; 

    this.eventServerCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddedBlueprint(serverNameInput: HTMLInputElement){
    this.eventBlpCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
