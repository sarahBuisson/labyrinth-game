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
import {CHARACTER_HEIGHT, CHARACTER_SPACING} from "../AsciiConst";

@Component({
  selector: '[ascii-div]',
  templateUrl: './ascii-div.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ascii-div.component.css']
})
export class AsciiDivComponent implements OnInit, AfterViewInit, AfterContentChecked {

  /**
   * place the border on the outside of the div, making the div bigger
   * put at false if you want the border on the inside, making the div the sameSize but compressing the content
   */
  @Input()
  borderOutside: boolean = true

  @Input()
  name?: string

  @Input()
  computeRenderEachTime: boolean = false
  haveAlreadyBeComputed: boolean = false

  @Input()
  contentClass: string

  @Input()
  xRepeat: number | undefined
  xComputedRepeat: number = 0
  @Input()
  yRepeat: number | undefined
  yComputedRepeat: number = 0
  @Input()
  topTemplate = "-"
  topRender
  @Input()
  bottomTemplate = this.topTemplate
  bottomRender
  @Input()
  leftTemplate = "|"
  leftRender
  @Input()
  rightTemplate = this.leftTemplate
  rightRender
  @Input()
  topLeftTemplate = "+"
  @Input()
  topRightTemplate = this.topLeftTemplate
  @Input()
  bottomLeftTemplate = this.topLeftTemplate
  @Input()
  bottomRightTemplate = this.topLeftTemplate

  @Input()
  defaultBorderClass: string
  @Input()
  topBorderClass = this.defaultBorderClass
  @Input()
  bottomBorderClass = this.defaultBorderClass
  @Input()
  leftBorderClass = this.defaultBorderClass
  @Input()
  rightBorderClass = this.defaultBorderClass
  @Input()
  topLeftBorderClass = this.defaultBorderClass
  @Input()
  topRightBorderClass = this.defaultBorderClass
  @Input()
  bottomLeftBorderClass = this.defaultBorderClass
  @Input()
  bottomRightBorderClass = this.defaultBorderClass

  @Input()
  borderDatas: any = defaultGridTemplate;


  computedInnerStyle: any;
  computedOuterStyle: any;
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

  computeGridStyle() {
    return {
      'grid-template-columns': `min-content min-content min-content`,
      'grid-template-rows': `min-content min-content min-content`
    }
  }

  /**
   * return an array of counter
   * @param size
   */
  counter(size): number[] {
    let array = new Array<number>();
    for (let i = 0; i < size; i++) {
      array.push(i)
    }
    return array;//TODO check why dont work for modal: [...Array(size).keys()]
  }

  ngAfterViewInit() {

    const old = {yComputedRepeat: this.yComputedRepeat, xComputedRepeat: this.xComputedRepeat}
    let shouldCompute = this.computeRenderEachTime || !this.haveAlreadyBeComputed || this.yComputedRepeat == 0 || this.xComputedRepeat == 0;

    if (shouldCompute) {

      if (this.contentDiv) {
        let boundingClientRect = (<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect();

        if (this.yRepeat) {
          this.yComputedRepeat = this.yRepeat;
        } else {
          if (this.borderOutside) {
            this.yComputedRepeat = Math.floor(boundingClientRect.height / (CHARACTER_HEIGHT * this.borderDatas.leftSideHeight))
          } else {
            this.yComputedRepeat = 2 + Math.floor(boundingClientRect.height / (CHARACTER_HEIGHT * this.borderDatas.leftSideHeight))
          }
        }
        if (this.xRepeat) {
          this.xComputedRepeat = this.xRepeat;
        } else {
          if (this.borderOutside) {
            this.xComputedRepeat = Math.floor(boundingClientRect.width / (CHARACTER_SPACING * this.borderDatas.topSideWidth))
          } else {
            this.xComputedRepeat = 2 + Math.ceil(boundingClientRect.width / (CHARACTER_SPACING * this.borderDatas.topSideWidth))
          }
        }

        if (this.xComputedRepeat != 0 && this.yComputedRepeat != 0 && old.xComputedRepeat != this.xComputedRepeat || old.yComputedRepeat != this.yComputedRepeat) {

          let style = getComputedStyle(<HTMLElement>this.contentDiv.nativeElement)

          let splitTop = this.topTemplate.split("\n")
          let splitBottom = this.bottomTemplate.split("\n")
          let counterX = this.counter(this.xComputedRepeat);
          this.topRender = splitTop.map((l) => {
              return counterX.map((i) => l).join("")
            }
          ).join('\n')

          this.bottomRender = splitBottom.map((l) => {
              return counterX.map((i) => l).join("")
            }
          ).join('\n')
          let counterY = this.counter(this.yComputedRepeat);
          this.leftRender=counterY.map((i)=>this.leftTemplate).join("\n")
          this.rightRender=counterY.map((i)=>this.rightTemplate).join("\n")
          this.computedInnerStyle = {}
          Object.keys(style).filter((n) => n.startsWith('padding')).forEach((key) => {
            this.computedInnerStyle[key] = style[key];
          });
          if (this.xRepeat > 0 && this.yRepeat > 0) {
            this.haveAlreadyBeComputed = true;
          }
          this._changeDetectorRef.detectChanges();
        }
      }

    }
  }
  ngAfterContentChecked(): void {
    this.ngAfterViewInit();
  }
}

