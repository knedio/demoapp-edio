import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '_shared/models/menu/menu.model'

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {

  @Input() menus: Menu[] 

  constructor() { }

  ngOnInit(): void {
  }

}
