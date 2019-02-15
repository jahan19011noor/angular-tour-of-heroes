import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBosterComponent } from './power-boster.component';

describe('PowerBosterComponent', () => {
  let component: PowerBosterComponent;
  let fixture: ComponentFixture<PowerBosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
