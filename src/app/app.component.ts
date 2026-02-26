import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { Check } from './models/check.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
