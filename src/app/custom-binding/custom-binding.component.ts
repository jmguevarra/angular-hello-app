import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-binding',
  templateUrl: './custom-binding.component.html',
  styleUrls: ['./custom-binding.component.css']
})
export class CustomBindingComponent implements OnInit {
  serverElements = [ { type: "server", name: "Arn Server", content: "Just a content" }];

  constructor() { }

  ngOnInit(): void { }

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintCreated(blueprintData: {blueprintName: string, blueprintContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

}
