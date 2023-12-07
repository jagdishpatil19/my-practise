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
import { PipesComponent } from './pipes/pipes.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StudentDtatInServiceComponent } from './student-dtat-in-service/student-dtat-in-service.component';
import { APICallComponent } from './api-call/api-call.component';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component';
 

const routes: Routes = [
  {path:'',component:MainPageComponent},
  {path:"login",component:LoginComponent},
  {path:'ifElse',component:IfElseComponent},
   {path:'loop',component:LoopsComponent},
   {path:'styleBinding',component:StyleBindingComponent},
   {path:'loginForm',component:LoginFormComponent},
   {path:'toggle',component:ToggleComponent},
   {path:'todoList',component: TodoListComponent},
   {path:'pipes',component:  PipesComponent},
   {path:'newForm',component: NewFormComponent},
   {path:'reactiveForm',component: ReactiveFormComponent},
   {path:'reactiveForm',component: ReactiveFormComponent},
   {path:'services',component:StudentDtatInServiceComponent},
   {path:'api',component:APICallComponent},
   {path:'hooks',component:HooksComponent},
   {path:'hookChild',component:HooksChildComponent},
   {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
