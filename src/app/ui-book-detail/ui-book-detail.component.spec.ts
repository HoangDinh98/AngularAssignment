import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookDetailComponent } from './ui-book-detail.component';

describe('UiBookDetailComponent', () => {
  let component: UiBookDetailComponent;
  let fixture: ComponentFixture<UiBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
