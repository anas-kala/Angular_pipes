import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;
  height: number | undefined;
  miles: number | undefined;

  car={
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  };

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.date = value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.amount = parseFloat(value);
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.height = parseFloat(value);
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.miles = parseFloat(value);
  }
}
