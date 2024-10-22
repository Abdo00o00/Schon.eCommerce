import { Component , OnInit , Input , Output , OnDestroy , OnChanges , NgModule} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private primengConfig: PrimeNGConfig) { }

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'New',
              icon: PrimeIcons.PLUS,
          },
          {
              label: 'Delete',
              icon: PrimeIcons.TRASH
          }
      ];



      this.primengConfig.ripple = true;


      this.primengConfig.zIndex = {
        modal: 1100,    // dialog, sidebar
        overlay: 1000,  // dropdown, overlaypanel
        menu: 1000,     // overlay menus
        tooltip: 1100   // tooltip
    }
  }



  value:any ;
  sidebarVisible2: boolean = false;

}
