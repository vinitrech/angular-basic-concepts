import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  serverCreated: boolean = true
  servers: string[] = ["server1", "server2", "server3", "server4"]
  displayItems:boolean = false;
  clicks: string[] = []

  getColor(): string{
    if(this.serverCreated === true){
      return "green";
    }
    return "red";
  }

  displayItemsToggle(): void{
    this.clicks.push("Click number " + (this.clicks.length+1))
    this.displayItems = !this.displayItems
  }

}
