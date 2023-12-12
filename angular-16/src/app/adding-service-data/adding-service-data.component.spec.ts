import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingServiceDataComponent } from './adding-service-data.component';

describe('AddingServiceDataComponent', () => {
  let component: AddingServiceDataComponent;
  let fixture: ComponentFixture<AddingServiceDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingServiceDataComponent]
    });
    fixture = TestBed.createComponent(AddingServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
