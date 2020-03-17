import { Component, OnInit, AfterContentInit, AfterContentChecked, ContentChild } from '@angular/core';
import { ContentchildDemoComponent } from '../contentchild-demo/contentchild-demo.component';
import { ViewchildDemoComponent } from '../viewchild-demo/viewchild-demo.component';

@Component({
  selector: 'app-content-parent-demo',
  templateUrl: './content-parent-demo.component.html',
  styleUrls: ['./content-parent-demo.component.scss']
})
export class ContentParentDemoComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild(ContentchildDemoComponent) ContentChild: ViewchildDemoComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log('Content is initialized', this.ContentChild.name);
  }

  ngAfterContentChecked() {
    console.log('Content is checked', this.ContentChild.name);
  }


}
