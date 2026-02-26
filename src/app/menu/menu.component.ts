import { Component, signal, Input } from '@angular/core';
import { Check } from '../models/check.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [FormsModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menuId!: string;
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
