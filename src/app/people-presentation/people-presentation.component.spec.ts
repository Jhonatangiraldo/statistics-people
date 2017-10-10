import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePresentationComponent } from './people-presentation.component';

describe('PeoplePresentationComponent', () => {
  let component: PeoplePresentationComponent;
  let fixture: ComponentFixture<PeoplePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
