import { Component, OnInit, Input, SimpleChanges, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnChangeComponent implements OnInit, OnChanges {

  @Input() newValue: number;
  @Input() hero: any;
  @Input() numArray: [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  refresh() {
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.numArray);
    console.log(this.newValue);
    console.log(this.hero);
  }

}
