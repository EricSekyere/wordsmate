import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputformComponent } from './inputform/inputform.component';
import { ErrorComponent} from './error/error.component';
import { ContactformComponent} from './contactform/contactform.component';

const routes: Routes = [
  { path: 'home', component: InputformComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
  { path: 'contact', component: ContactformComponent },
  { path: 'contact', redirectTo: '/contact', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
