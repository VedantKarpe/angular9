import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentchild-demo',
  templateUrl: './contentchild-demo.component.html',
  styleUrls: ['./contentchild-demo.component.scss']
})
export class ContentchildDemoComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
