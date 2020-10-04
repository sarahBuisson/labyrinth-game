import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ascii-gallery',
  templateUrl: './ascii-gallery.component.html',
  styleUrls: ['./ascii-gallery.component.css']
})
export class AsciiGalleryComponent implements OnInit {
  emptyZone: any = {contentArray: [], connectionsMap: []};
  defaultZone: any = {
    contentArray: [{name: 'start', type:'key'}, {name: 'k', type:'key'},
      {name: 'A', destination: {x: 1, y: 1}, key: {name: 'a'}},
      {name: 'B', destination: {x: 2, y: 1}},
      {
        name: 'C', destination: {x: 3, y: 1}, key: {name: 'a'}
      }

    ],
    connectionsMap: {
      'TOP': {x: 1, y: 1},
      'BOTTOM': {x: 2, y: 1},
      'LEFT': {x: 3, y: 1},
      'RIGHT': {x: 4, y: 1}
    }
};

  display = false

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.display = !this.display;
  }
}
