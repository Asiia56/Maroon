import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ApexCandlestickComponent } from './apex-candlestick.component';

describe('ApexCandlestickComponent', () => {
  let component: ApexCandlestickComponent;
  let fixture: ComponentFixture<ApexCandlestickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ]
    }).compileComponents(). then(() => {
      fixture = TestBed.createComponent(ApexCandlestickComponent);
      component = fixture.componentInstance;
     // fixture.detectChanges();
    })
  });

  it('should create ApexCandlestickComponent', () => {
    expect(component).toBeTruthy();
  });
});
