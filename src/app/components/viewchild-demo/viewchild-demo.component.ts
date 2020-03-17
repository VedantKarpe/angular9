import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-demo',
  templateUrl: './viewchild-demo.component.html',
  styleUrls: ['./viewchild-demo.component.scss']
})
export class ViewchildDemoComponent implements OnInit {

  public  name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
