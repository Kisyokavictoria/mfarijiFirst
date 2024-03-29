import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isResponsive: boolean = false;

  toggleNavbar() {
    this.isResponsive = !this.isResponsive;
  }
}

