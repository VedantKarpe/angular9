import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ViewchildDemoComponent } from './components/viewchild-demo/viewchild-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(ViewchildDemoComponent) viewChild: ViewchildDemoComponent;

  number = 1;
  hero = {
    name: 'vedusuper'
  };
  numberArray = [];

  ngOnInit(): void {
    console.log(this.hero.name);
  }

  incrementNumber() {
    this.number = this.number + 1;
  }

  updateObject() {
    // this.hero = {name: 'veduPower'};
    this.hero.name = 'veduPower';
  }

  addNumber(num) {
    // this.numberArray = [...this.numberArray, num];
    this.numberArray.push(num);
    console.log(this.numberArray);
  }

  ngAfterViewInit(): void {
    console.log('View is initialized', this.viewChild.name);
  }

  ngAfterViewChecked(): void {
    console.log('View is checked', this.viewChild.name);
  }

}
