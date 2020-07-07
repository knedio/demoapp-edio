import { Component, OnInit } from '@angular/core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '_shared/models/menu/menu.model'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  faBars = faBars
  faTimes = faTimes

  menus: Menu[]
  showSidebar: boolean = false  

  constructor() { }

  ngOnInit(): void {
    this.onSetMenu()
  }

  onChangeSidebar(): void {
    this.showSidebar = !this.showSidebar
  }
  
  onGetToggleIcon(): any {
    return this.showSidebar ? faTimes : faBars
  }

  onSetMenu(): void {
    this.menus = [
      {
        title: 'Home',
        link: '/'
      }, {
        title: 'Add User',
        link: '/user/new'
      }, 
    ]
  }

}
