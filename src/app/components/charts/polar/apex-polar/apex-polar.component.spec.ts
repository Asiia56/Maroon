import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexPolarComponent } from './apex-polar.component';

describe('ApexPolarComponent', () => {
  let component: ApexPolarComponent;
  let fixture: ComponentFixture<ApexPolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexPolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
