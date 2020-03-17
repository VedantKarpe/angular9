import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentParentDemoComponent } from './content-parent-demo.component';

describe('ContentParentDemoComponent', () => {
  let component: ContentParentDemoComponent;
  let fixture: ComponentFixture<ContentParentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentParentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentParentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
