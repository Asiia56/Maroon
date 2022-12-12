import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexBarComponent } from './apex-bar.component';

describe('ApexBarComponent', () => {
  let component: ApexBarComponent;
  let fixture: ComponentFixture<ApexBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
