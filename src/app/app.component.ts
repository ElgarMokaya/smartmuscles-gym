import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartmuscles';
  menuVariable:boolean=false;
  menu_icon_variable :boolean=false;
  openMenu(){
this.menuVariable = ! this.menuVariable;
this.menu_icon_variable = ! this.menu_icon_variable
  }
}
