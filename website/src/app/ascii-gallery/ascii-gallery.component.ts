import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascii-gallery',
  templateUrl: './ascii-gallery.component.html',
  styleUrls: ['./ascii-gallery.component.css']
})
export class AsciiGalleryComponent implements OnInit {
  emptyZone: any={contentArray:[], connectionsMap:[]};
  defaultZone: any={contentArray:[{name:'start'},{name:'exit'}], connectionsMap:[]};

  display=false
  constructor() { }

  ngOnInit(): void {
  }

  toggle():void{
    this.display=!this.display;
  }
}
