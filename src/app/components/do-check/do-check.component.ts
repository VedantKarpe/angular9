import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements OnInit, DoCheck {

  constructor() { }

  ngDoCheck(): void {
    console.log('fired Do Check');
  }

  ngOnInit(): void {
  }

}
