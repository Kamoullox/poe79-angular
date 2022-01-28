import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwColorSliderComponent } from './aw-color-slider.component';

describe('AwColorSliderComponent', () => {
  let component: AwColorSliderComponent;
  let fixture: ComponentFixture<AwColorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwColorSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwColorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
