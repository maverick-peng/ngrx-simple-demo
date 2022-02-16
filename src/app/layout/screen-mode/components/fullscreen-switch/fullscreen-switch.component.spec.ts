import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenSwitchComponent } from './fullscreen-switch.component';

describe('FullscreenSwitchComponent', () => {
  let component: FullscreenSwitchComponent;
  let fixture: ComponentFixture<FullscreenSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
