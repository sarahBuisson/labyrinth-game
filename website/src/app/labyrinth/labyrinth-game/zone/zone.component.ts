import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
  inputs:["levelCase"]
})
export class ZoneComponent implements OnInit {

  levelCase:any
  constructor() { }

  ngOnInit(): void {
  }

}
