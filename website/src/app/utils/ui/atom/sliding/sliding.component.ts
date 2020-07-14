import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

const defaultData = {
  top: 'auto',
  bottom: 'auto',
  left: 'auto',
  right: 'auto',
  color:'default'
}


function generateStyle(dataName) {
  const tokenStyle = {}

  for (let key in defaultData) {
    tokenStyle[key] = '{{ ' + dataName + '' + key + ' }}'
  }
  return style(tokenStyle);
}

function generateDefaultParams(dataName) {
  const tokenStyle = {}

  for (let key in defaultData) {
    tokenStyle[''+dataName + '' + key] = defaultData[key]
  }

  console.log("generatedefaultParams")
  console.log(tokenStyle)
  return tokenStyle
}


@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.component.html',
  styleUrls: ['./sliding.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', generateStyle('_openData'), {
        params: generateDefaultParams('_openData')
      }),
      state('close', generateStyle('_closeData'), {
        params: generateDefaultParams('_closeData')
      }),
      transition('* => open', [
        animate('3s')
      ]),
      transition('* => close', [
        animate('3s')
      ]),
    ]),
  ],
})
export class SlidingComponent implements OnInit, OnChanges {
  @Input()
  public openData: any
  @Input()
  public closeData: any

  public isOpen = false

  constructor() {
  }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  ngOnChanges(): void {


  }


  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  onAnimationEvent($event: any) {
    console.log("move"+$event.fromState)
  }

   generateParams() {
    const params = {}

    for (let key in defaultData) {
      params['_openData'+key]=this.openData[key]?this.openData[key]:defaultData[key]
      params['_closeData'+key]=this.closeData[key]?this.closeData[key]:defaultData[key]

    }

    console.log("generateParams")
    console.log(params)
    return params
  }
}
