import { Component, VERSION, ReflectiveInjector } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  userName: string;
  userService: UserService;

  providerHidden = false;

  constructor() {
    // create an inject and ask for it to reslove and create a UserService
    const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
    this.userService = injector.get(UserService)
  }

  displayProvider() {
    this.providerHidden = !this.providerHidden;
  }
}
