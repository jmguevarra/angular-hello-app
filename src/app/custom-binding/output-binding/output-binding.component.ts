import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-binding',
  templateUrl: './output-binding.component.html',
  styleUrls: ['./output-binding.component.css']
})
export class OutputBindingComponent implements OnInit {
  @Output() eventServerCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() eventBlueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddedServer(){
    this.eventServerCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent });
  }

  onAddedBlueprint(){
    this.eventBlueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

}
