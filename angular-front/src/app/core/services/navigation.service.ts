import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  showSidenav: boolean = false;
  darkModeSelected: boolean = false;

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
  getShowSidenav() {
    return this.showSidenav;
  }

  toggleDarkMode() {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        this.darkModeSelected = false;
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        this.darkModeSelected = true;
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        this.darkModeSelected = true;
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        this.darkModeSelected = false;
      }
    }
  }

  initializeDarkmode() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.darkModeSelected = false;
    } else {
      document.documentElement.classList.remove('dark')
      this.darkModeSelected = true;
    }
  }
}
