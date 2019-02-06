import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDayPage } from './ReviewDay.page';

describe('ReviewDayPage', () => {
  let component: ReviewDayPage;
  let fixture: ComponentFixture<ReviewDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewDayPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
