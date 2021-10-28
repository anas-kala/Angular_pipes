import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined;

  onNameChange(event: Event){
    const target=event.target as HTMLInputElement;
    const value=target.value;
    this.name=value;
  }
}
