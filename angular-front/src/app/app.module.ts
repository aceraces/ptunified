import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {CoreModule} from "./core/core.module";
import {RegularHomeModule} from "./modules/regular-home/regular-home.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    CoreModule,
    RegularHomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
