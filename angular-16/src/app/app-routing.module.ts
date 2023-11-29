import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { IfElseComponent } from './if-else/if-else.component';
import { LoopsComponent } from './loops/loops.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { LoginFormComponent } from './form/login-form/login-form.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TodoListComponent } from './todo-list/todo-list.component';
 

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:"login",component:LoginComponent},
  {path:'ifElse',component:IfElseComponent},
   {path:'loop',component:LoopsComponent},
   {path:'styleBinding',component:StyleBindingComponent},
   {path:'loginForm',component:LoginFormComponent},
   {path:'toggle',component:ToggleComponent},
   {path:'todoList',component: TodoListComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
