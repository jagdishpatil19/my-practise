import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { LoginComponent } from './first-component/login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'', component : FirstComponentComponent},
  {path:'click', component:LoginComponent },
  {path:'signup', component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
