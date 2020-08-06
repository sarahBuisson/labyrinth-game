import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {defaultGridTemplate} from "../../../labyrinth/service/render/resources/border";

@Component({
  selector: 'ascii-div',
  templateUrl: './ascii-div.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ascii-div.component.css']
})
export class AsciiDivComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {
  @Input()
  xRepeat: number = 1
  @Input()
  yRepeat: number = 1

  @Input()
  topTemplate = "-"
  @Input()
  bottomTemplate = this.topTemplate
  @Input()
  leftTemplate = "|"
  @Input()
  rightTemplate = this.leftTemplate
  @Input()
  topLeftTemplate = "+"
  @Input()
  topRightTemplate = this.topLeftTemplate
  @Input()
  bottomLeftTemplate = this.topLeftTemplate
  @Input()
  bottomRightTemplate = this.topLeftTemplate

  @Input()
  borderDatas: any=defaultGridTemplate;

  @ViewChild('contentDiv') contentDiv: ElementRef

  @Input()
  onClick: any = () => {
  }


  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.borderDatas) {
      Object.assign(this, this.borderDatas)
    }
  }

  counter(size) {
    let array = new Array()
    for (let i = 0; i < size; i++) {
      array.push(i)
    }
    return array;
  }

  ngAfterViewInit() {
    if(this.contentDiv){
    this.yRepeat = Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().height / (15.1*this.borderDatas.leftSideHeight))
    this.xRepeat =  Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().width / (7.82*this.borderDatas.topSideWidth))
    this._changeDetectorRef.detectChanges();
    }
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewInit();
  }

  ngAfterContentChecked(): void {
    this.ngAfterViewInit();
  }
}

