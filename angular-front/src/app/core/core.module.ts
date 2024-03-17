import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CommonModule} from "@angular/common";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  exports: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CoreModule { }
