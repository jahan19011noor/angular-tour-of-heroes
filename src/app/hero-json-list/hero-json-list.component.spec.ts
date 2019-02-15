import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJsonListComponent } from './hero-json-list.component';

describe('HeroJsonListComponent', () => {
  let component: HeroJsonListComponent;
  let fixture: ComponentFixture<HeroJsonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroJsonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroJsonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
