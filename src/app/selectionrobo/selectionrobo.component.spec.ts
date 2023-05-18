import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionroboComponent } from './selectionrobo.component';

describe('SelectionroboComponent', () => {
  let component: SelectionroboComponent;
  let fixture: ComponentFixture<SelectionroboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionroboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionroboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
