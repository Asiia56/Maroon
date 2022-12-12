import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarWithSearchComponent } from './bar-with-search.component';

describe('BarWithSearchComponent', () => {
  let component: BarWithSearchComponent;
  let fixture: ComponentFixture<BarWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarWithSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
