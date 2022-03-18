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

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
    console.log(blueprintData, blueprintData.serverName, blueprintData.serverContent);
    console.log(this.serverElements);
  }

}
