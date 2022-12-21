import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexCandlestickWasComponent } from './apex-candlestick-was.component';

describe('ApexCandlestickWasComponent', () => {
  let component: ApexCandlestickWasComponent;
  let fixture: ComponentFixture<ApexCandlestickWasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexCandlestickWasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexCandlestickWasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
