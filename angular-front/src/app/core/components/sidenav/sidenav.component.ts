import {Component, inject} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {
  readonly navigationService = inject(NavigationService);
  constructor() {
  }

  toggleDarkmode() {
    this.navigationService.toggleDarkMode()
  }
}
