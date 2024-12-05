import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTopic00015662Component } from './details-topic-00015662.component';

describe('DetailsTopic00015662Component', () => {
  let component: DetailsTopic00015662Component;
  let fixture: ComponentFixture<DetailsTopic00015662Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTopic00015662Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTopic00015662Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
