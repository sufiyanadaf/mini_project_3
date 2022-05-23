import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavigationPanelComponent } from './left-navigation-panel.component';

describe('LeftNavigationPanelComponent', () => {
  let component: LeftNavigationPanelComponent;
  let fixture: ComponentFixture<LeftNavigationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavigationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
