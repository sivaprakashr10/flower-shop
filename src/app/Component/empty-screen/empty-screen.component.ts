import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
})
export class EmptyScreenComponent implements OnInit {
  @Input() model: any;
  constructor() {}

  ngOnInit() {}
}
