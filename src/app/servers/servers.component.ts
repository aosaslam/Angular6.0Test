import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverAdded = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onAddServer = () => {
    this.serverAdded = true;
    this.serverCreationStatus = 'Server Created Successfully!!! Name is ' + this.serverName;
  }
  onUpdateServer = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
