import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-geo-object',
  templateUrl: './geo-object.component.html',
  styleUrls: ['./geo-object.component.css']
})
export class GeoObjectComponent implements OnInit {

  @Input()
  object: { name }
  exit: any = "" +
    "  |--|\n" +
    "  |--|\n" +
    ":¨|--|¨:\n" +
    "'¨¨¨¨¨¨'\n" +
    "  exit";
  start: any = "" +
    "  +________\n" +
    "  |start <\n" +
    "  +¨¨¨¨¨¨¨¨\n" +
    "  |\n" +
    "  |";

  constructor() {
  }

  ngOnInit(): void {
  }

}
