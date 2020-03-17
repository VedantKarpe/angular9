import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckComponent } from './do-check.component';

describe('DoCheckComponent', () => {
  let component: DoCheckComponent;
  let fixture: ComponentFixture<DoCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
