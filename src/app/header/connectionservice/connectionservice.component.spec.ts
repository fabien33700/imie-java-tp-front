import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionserviceComponent } from './connectionservice.component';

describe('ConnectionserviceComponent', () => {
  let component: ConnectionserviceComponent;
  let fixture: ComponentFixture<ConnectionserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
