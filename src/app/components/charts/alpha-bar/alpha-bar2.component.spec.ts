import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaBar2Component } from './alpha-bar2.component';

describe('AlphaBar2Component', () => {
  let component: AlphaBar2Component;
  let fixture: ComponentFixture<AlphaBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaBar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
