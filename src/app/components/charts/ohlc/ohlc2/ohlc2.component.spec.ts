import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ohlc2Component } from './ohlc2.component';

describe('Ohlc2Component', () => {
  let component: Ohlc2Component;
  let fixture: ComponentFixture<Ohlc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ohlc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ohlc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
