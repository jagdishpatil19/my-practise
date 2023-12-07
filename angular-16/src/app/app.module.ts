import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherPractiseComponent } from './other-practise/other-practise.component';
import { IfElseComponent } from './if-else/if-else.component';
import { LoopsComponent } from './loops/loops.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildParentComponent } from './child-parent/child-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { StudentDtatInServiceComponent } from './student-dtat-in-service/student-dtat-in-service.component';
import { APICallComponent } from './api-call/api-call.component';
import{HttpClientModule}from '@angular/common/http';
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks-child/hooks-child.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    DatabindingComponent,
    OtherPractiseComponent,
    IfElseComponent,
    LoopsComponent,
    StyleBindingComponent,
    ToggleComponent,
    TodoListComponent,
    ChildParentComponent,
    PipesComponent,
    NewFormComponent,
    ReactiveFormComponent,
    ErrorPageComponent,
    StudentDtatInServiceComponent,
    APICallComponent,
    HooksComponent,
    HooksChildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
