import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APICallComponent } from './api-call.component';

describe('APICallComponent', () => {
  let component: APICallComponent;
  let fixture: ComponentFixture<APICallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APICallComponent]
    });
    fixture = TestBed.createComponent(APICallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
