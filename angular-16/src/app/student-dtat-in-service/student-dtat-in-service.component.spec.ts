import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDtatInServiceComponent } from './student-dtat-in-service.component';

describe('StudentDtatInServiceComponent', () => {
  let component: StudentDtatInServiceComponent;
  let fixture: ComponentFixture<StudentDtatInServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDtatInServiceComponent]
    });
    fixture = TestBed.createComponent(StudentDtatInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
