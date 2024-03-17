import {Component, inject} from '@angular/core';
import {NavigationService} from "./core/services/navigation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly navigationService = inject(NavigationService)

  constructor() {
    this.navigationService.initializeDarkmode();
  }
}
