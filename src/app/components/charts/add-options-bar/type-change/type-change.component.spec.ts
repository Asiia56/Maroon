import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChangeComponent } from './type-change.component';

describe('TypeChangeComponent', () => {
  let component: TypeChangeComponent;
  let fixture: ComponentFixture<TypeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
