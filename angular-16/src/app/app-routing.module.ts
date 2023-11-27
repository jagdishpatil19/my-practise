import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { IfElseComponent } from './if-else/if-else.component';
import { LoopsComponent } from './loops/loops.component';
 

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:"login",component:LoginComponent},
  {path:'ifElse',component:IfElseComponent},
   {path:'loop',component:LoopsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
