import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { Check } from '../models/check.model';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, MenuComponent, FormsModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  menuTitle: string = 'Тип 1'
  activeMenu: string | null = 'menu1';

  openMenu(menu: string) {
    if (menu === 'menu2') {
      this.menuTitle = 'Тип 2';
    } else {
      this.menuTitle = 'Тип 1';
    }
    this.activeMenu = menu;
  }

  protected readonly checks = signal<Check[]>([
    { id: 1, value: 20, pressed: false },
    { id: 2, value: 30, pressed: false },
    { id: 3, value: 40, pressed: false },
    { id: 4, value: 50, pressed: false }
  ]);

  
  count = 0;
  pressed = 0;

  protected checkPressed(check: Check) {
    check.pressed = !check.pressed;
    this.count = this.checks().filter(c => c.pressed).reduce((sum, c) => sum + c.value, 0);
    this.pressed = this.checks().filter(c => c.pressed).length;
  }
}
