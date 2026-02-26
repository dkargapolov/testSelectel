import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainComponentComponent } from './main-component/main-component.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'main', component: MainComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}