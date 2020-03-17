import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildDemoComponent } from './contentchild-demo.component';

describe('ContentchildDemoComponent', () => {
  let component: ContentchildDemoComponent;
  let fixture: ComponentFixture<ContentchildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
