import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigation00015662Component } from './navigation-00015662.component';

describe('Navigation00015662Component', () => {
  let component: Navigation00015662Component;
  let fixture: ComponentFixture<Navigation00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navigation00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigation00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
