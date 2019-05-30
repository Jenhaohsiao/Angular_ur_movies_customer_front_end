import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAdvertisingComponent } from './hero-advertising.component';

describe('HeroAdvertisingComponent', () => {
  let component: HeroAdvertisingComponent;
  let fixture: ComponentFixture<HeroAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
