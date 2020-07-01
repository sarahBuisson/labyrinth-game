import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ascii-div',
  templateUrl: './ascii-div.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ascii-div.component.css']
})
export class AsciiDivComponent implements OnInit, AfterViewInit, AfterViewChecked {
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
  borderDatas: any

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
    this.yRepeat = Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().height / 15)
    this.xRepeat =  Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().width / 7.8)

    this._changeDetectorRef.detectChanges();
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewInit();
  }
}

