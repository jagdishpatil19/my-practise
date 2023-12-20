import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChildComponent } from './todo-child.component';

describe('TodoChildComponent', () => {
  let component: TodoChildComponent;
  let fixture: ComponentFixture<TodoChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoChildComponent]
    });
    fixture = TestBed.createComponent(TodoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
