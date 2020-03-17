import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildDemoComponent } from './viewchild-demo.component';

describe('ViewchildDemoComponent', () => {
  let component: ViewchildDemoComponent;
  let fixture: ComponentFixture<ViewchildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
