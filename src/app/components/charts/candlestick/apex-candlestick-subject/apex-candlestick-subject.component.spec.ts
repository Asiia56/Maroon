import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexCandlestickSubjectComponent } from './apex-candlestick-subject.component';

describe('ApexCandlestickSubjectComponent', () => {
  let component: ApexCandlestickSubjectComponent;
  let fixture: ComponentFixture<ApexCandlestickSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexCandlestickSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexCandlestickSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
