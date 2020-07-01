import {Component, Input, OnInit} from '@angular/core';
import {bagGridTemplate} from "../decor/resources/data";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input()
  player: any;
  borderDatas: any = bagGridTemplate;

  constructor() {
  }

  ngOnInit(): void {
  }

}
