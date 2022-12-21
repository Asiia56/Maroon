import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionsBarComponent } from './add-options-bar.component';

describe('AddOptionsBarComponent', () => {
  let component: AddOptionsBarComponent;
  let fixture: ComponentFixture<AddOptionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOptionsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
