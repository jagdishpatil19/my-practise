import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPractiseComponent } from './other-practise.component';

describe('OtherPractiseComponent', () => {
  let component: OtherPractiseComponent;
  let fixture: ComponentFixture<OtherPractiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherPractiseComponent]
    });
    fixture = TestBed.createComponent(OtherPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
