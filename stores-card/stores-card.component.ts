import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-card',
  templateUrl: './stores-card.component.html',
  styleUrls: ['./stores-card.component.scss']
})
export class StoresCardComponent implements OnInit {

  @Input() stores: Object;

  constructor() { }

  ngOnInit() {
  }

}
