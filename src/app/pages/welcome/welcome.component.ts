import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,           // <--- standalone компонент
  imports: [RouterModule],    // <--- нужно подключить RouterModule
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {}