import { Component, Input } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'hello',
  template: `<h2>{{name}}!</h2>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  // Angular will inject the singleton instance of `UserService` here.
  constructor(private userService: UserService) {
    // empty because we don't have to do anything else!
  }
  
}
