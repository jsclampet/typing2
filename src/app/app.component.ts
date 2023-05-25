import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lorem = faker.lorem.sentence();
  userInput: string = '';

  onUserInput(value: string) {
    this.userInput = value;
  }

  compare(loremLetter: string, userInputLetter: string) {
    if(!userInputLetter) {
      return 'pending';
    }
    return loremLetter === userInputLetter ? 'correct' : 'incorrect';
  }
}
