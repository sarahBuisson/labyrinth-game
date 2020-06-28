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
 get title():string{
   if(this.object.name.length==1)
   return "key "+this.object.name;
   else return this.object.name
 }
  constructor() {
  }

  ngOnInit(): void {
  }

}
