import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSelectorComponent } from './chart-selector.component';

describe('ChartSelectorComponent', () => {
  let component: ChartSelectorComponent;
  let fixture: ComponentFixture<ChartSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
