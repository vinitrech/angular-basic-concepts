import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName = 'Server name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(): void{
    this.serverCreationStatus = `${this.serverName} server was created`;
    this.allowNewServer = false;
  }

  onUpdateServerName(event: Event): void{
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
