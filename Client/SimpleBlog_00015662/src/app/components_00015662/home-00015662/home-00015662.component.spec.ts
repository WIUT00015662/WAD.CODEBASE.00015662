import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home00015662Component } from './home-00015662.component';

describe('Home00015662Component', () => {
  let component: Home00015662Component;
  let fixture: ComponentFixture<Home00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
