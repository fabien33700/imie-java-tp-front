import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsModulesComponent } from './highcharts-modules.component';

describe('HighchartsModulesComponent', () => {
  let component: HighchartsModulesComponent;
  let fixture: ComponentFixture<HighchartsModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
