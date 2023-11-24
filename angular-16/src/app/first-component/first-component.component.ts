import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(private r :Router){}

  signup(){
      
    this.r.navigateByUrl("signup")
  }
}
