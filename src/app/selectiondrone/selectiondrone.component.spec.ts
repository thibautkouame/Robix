import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiondroneComponent } from './selectiondrone.component';

describe('SelectiondroneComponent', () => {
  let component: SelectiondroneComponent;
  let fixture: ComponentFixture<SelectiondroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectiondroneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectiondroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
