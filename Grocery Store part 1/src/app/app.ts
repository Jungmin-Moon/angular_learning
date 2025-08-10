import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: "<store></store>",
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'GroceryStore';
}
