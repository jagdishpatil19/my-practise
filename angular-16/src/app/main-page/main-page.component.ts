import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
constructor(private router:Router){}
  login(){
this.router.navigateByUrl("login")
  }
  ifElse(){
    this.router.navigateByUrl('ifElse')
  }
  loop(){
    this.router.navigateByUrl('loop')
  }
}
