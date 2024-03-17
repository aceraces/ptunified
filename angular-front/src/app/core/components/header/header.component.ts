import {Component, inject} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly navigationService = inject(NavigationService);

  languagePressed: boolean = false;

  languageToggle() {
    this.languagePressed = !this.languagePressed;
  }

  toggleHamburger(){
    this.navigationService.toggleSidenav();
  }
}
