import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, HostBinding,
  Input, NgZone, OnDestroy,
  OnInit, Renderer2,
  ViewChild
} from '@angular/core';

import * as borderTemplates from "../../../labyrinth/service/render/resources/border";
import {CHARACTER_SPACING, LINE_HEIGHT} from "../AsciiConst";
import {timer} from "rxjs";
import {delay} from "rxjs/operators";
import {Style} from "@angular/cli/lib/config/schema";
import {BorderTemplate} from "../../../labyrinth/service/render/resources/border-compute";

@Component({
  selector: 'ascii-border , [ascii-border] , div [ascii-render], span [ascii-render], button [ascii-render], p [ascii-render], h1 [ascii-render]',
  templateUrl: './ascii-border.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ascii-border.component.css']
})
export class AsciiBorderComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  /**
   * place the border on the outside of the div, making the div bigger
   * put at false if you want the border on the inside, making the div the sameSize but compressing the content
   */

  @Input()
  name?: string

  @Input()
  computeRenderEachTime?: boolean = undefined
  haveAlreadyBeComputed: boolean = false

  @Input()
  contentClass: string

  @Input()
  xRepeat: number | undefined
  xComputedRepeat: number = 0
  @Input()
  yRepeat: number | undefined
  yComputedRepeat: number = 0

  renders: {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string
  } = {}
  borderClasses: {
    default?: string,
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
    topLeft?: string
    topRight?: string
    bottomLeft?: string
    bottomRight?: string
  } = {}

  @Input()
  borderTemplateName: string;

  @Input()
  borderTemplate: BorderTemplate;


  computedData: {
    computed?: string;

    widthPx?: number;
    heightPx?: number;

    borderSizePx: {
      top?: number,
      bottom?: number,
      left?: number,
      right?: number
    }
  } = {borderSizePx: {}, computed: 'none'}

  toClear: any[] = [];
  @Input()
  borderClick: any = () => {
  }

  @HostBinding("style")
 get hostStyle(): CSSStyleDeclaration {
    let hostStyle = {
      border: 'solid transparent',
      borderTopWidth: this.computedData.borderSizePx.top + 'px',
      borderBottomWidth: this.computedData.borderSizePx.bottom + 'px',
      borderRightWidth: this.computedData.borderSizePx.right + 'px',
      borderLeftWidth: this.computedData.borderSizePx.left + 'px',
      height: this.yRepeat ? (this.yRepeat * this.borderTemplate.leftSideHeight * LINE_HEIGHT) + 'px' : undefined,
      width: this.xRepeat ? (this.xRepeat * this.borderTemplate.topSideWidth * CHARACTER_SPACING)+'px':undefined
    } as CSSStyleDeclaration


    return hostStyle;

  }
  @Input()
  debug = false;

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef,
              private hostRef: ElementRef,
              private renderer: Renderer2,
              private ngZone: NgZone) {

  }

  ngOnInit() {
    try {
      this.borderTemplateName = this.borderTemplateName || this.hostRef.nativeElement.nodeName
      this.borderTemplate = this.borderTemplate || this.getAsciiBorderForName(this.borderTemplateName)
      this.computeBorderTemplateData();

      if (this.computeRenderEachTime == undefined) {
        if(this.xRepeat&& this.yRepeat){
          this.computeRenderEachTime = false;
        }else
        this.computeRenderEachTime = true// this.hostRef.nativeElement.clientWidth ? false : true
      }

      if (this.xRepeat && this.yRepeat) {
        this.computeBorderDimension()
      }
    } catch (e) {
      console.error(e)
    }
  }

  computeBorderTemplateData() {
    if (this.borderTemplate) {
      this.computedData = {
        ...this.computedData,
        borderSizePx:
          {
            top: this.borderTemplate.topPartHeight * LINE_HEIGHT,
            bottom: this.borderTemplate.bottomPartHeight * LINE_HEIGHT,
            right: this.borderTemplate.rightPartWidth * CHARACTER_SPACING,
            left: this.borderTemplate.leftPartWidth * CHARACTER_SPACING
          }
      }
    }
  }

  @HostBinding('attr.dataComputed')
  get compJson() {
    return JSON.stringify(this.computedData)
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
    this.computeAndUpdateDimension();
  }

  private computeAndUpdateDimension() {
    try {
      if (this.computeBorderDimension()) {
        this.ngZone.runOutsideAngular(() => {
          let timeout = setTimeout(() => {
            this._changeDetectorRef.detectChanges();

            clearTimeout(timeout);
          }, 100);
          this.toClear.push(timeout);
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  private computeBorderDimension(): boolean {

    try {
      if (!this.computedData.borderSizePx.top)
        this.computeBorderTemplateData()


      let mainElement = <HTMLElement>this.hostRef.nativeElement;

      let height: number, width: number;
      if (mainElement.clientWidth) {
        height = mainElement.clientHeight// - this.computedData.borderTopSizePx - this.computedData.borderBottomSizePx
        width = mainElement.clientWidth
        this.computedData.computed = 'client'
      } else if (mainElement.offsetWidth) {
        this.computedData.computed = 'offset' + mainElement.offsetWidth
        height = mainElement.offsetHeight - this.computedData.borderSizePx.top - this.computedData.borderSizePx.bottom
        width = mainElement.offsetWidth - this.computedData.borderSizePx.left - this.computedData.borderSizePx.right
      } else {
        this.computedData.computed = 'none'
        return false;
      }
      if (isNaN(height) || isNaN(width)) {
        console.warn("no dimension " + height + " " + width)
        return false;
      }

      const hostHaveChangedX = this.computedData.widthPx != width
      const hostHaveChangedY = this.computedData.heightPx != height;

      let shouldComputeX = (width || this.xRepeat) && (hostHaveChangedX || this.computeRenderEachTime || !this.haveAlreadyBeComputed);
      let shouldComputeY = (height || this.yRepeat) && (hostHaveChangedY || this.computeRenderEachTime || !this.haveAlreadyBeComputed);

      if (shouldComputeX) {
        this.computedData.widthPx = width;
        let oldX = this.xComputedRepeat;
        if (this.xRepeat != undefined) {
          this.xComputedRepeat = this.xRepeat;
        } else {
          this.xComputedRepeat = Math.floor(width / (CHARACTER_SPACING * this.borderTemplate.topSideWidth));
        }

        let allDataPresent = this.xComputedRepeat;
        let computedDataHaveChange = oldX != this.xComputedRepeat;
        if (allDataPresent && computedDataHaveChange) {
          try {
            let counterX = this.counter(this.xComputedRepeat);


            let splitTop = this.borderTemplate.topTemplate.split("\n")
            let splitBottom = this.borderTemplate.bottomTemplate.split("\n")


            this.renders = {
              ...this.renders,
              top: splitTop.map((l) => counterX.map((i) => l).join('')).join('\n'),
              bottom: splitBottom.map((l) => counterX.map((i) => l).join('')).join('\n'),

            }
            this.haveAlreadyBeComputed = true;
            return true;
          } catch (e) {
            console.error(e);
            return true;
          }
        }
      } else {

      }
      if (shouldComputeY) {
        this.computedData.heightPx = height;
        let oldY = this.yComputedRepeat
        if (this.yRepeat != undefined) {
          this.yComputedRepeat = this.yRepeat;
        } else {
          this.yComputedRepeat = Math.floor(height / (LINE_HEIGHT * this.borderTemplate.leftSideHeight));
        }

        let allDataPresent = this.yComputedRepeat;
        let computedDataHaveChange = oldY != this.yComputedRepeat;
        if (allDataPresent && computedDataHaveChange) {
          try {
            let counterY = this.counter(this.yComputedRepeat);
            this.renders = {
              ...this.renders,
              left: counterY.map((i) => this.borderTemplate.leftTemplate).join('\n'),
              right: counterY.map((i) => this.borderTemplate.rightTemplate).join('\n')
            }
            this.haveAlreadyBeComputed = true;
            return true;
          } catch (e) {
            console.error(e);
            return false;
          }
        }
      } else {
      }
    } catch (e) {
      console.error("error during compute")
    }
  }

  ngAfterContentChecked(): void {
    if (this.computeRenderEachTime || this.haveAlreadyBeComputed)
      this.ngZone.runOutsideAngular(() => {
        let timeout=setTimeout(() => {
          try {
            this.computeAndUpdateDimension()
            clearTimeout(timeout);
          } catch (e) {
            console.error(e);
          }
        }, 100);
        this.toClear.push(timeout)
      });
  }


  getAsciiBorderForName(name: string): BorderTemplate {

    if (Object.keys(borderTemplates).includes(name + 'GridTemplate'))
      return borderTemplates[name + 'GridTemplate']//TODO : we need to test the include otherwise it bug

    if (Object.keys(borderTemplates).includes(name))
      return borderTemplates[name]//TODO : we need to test the include otherwise it bug

    if (name === 'BUTTON') {
      return borderTemplates.defaultButtonBorderTemplate;
    }
    if (name === 'DIV') {
      return borderTemplates.defaultGridTemplate;
    }
    if (name === 'H1') {
      return borderTemplates.defaultTitleBorderTemplate;
    }
    return borderTemplates.defaultGridTemplate;
  }

  styleOfPart(directions: string[]) {
    let style: any = {position: 'absolute', top: 0, left: 0}
    directions.forEach(dir => {
      if (dir === 'left') {
        style.left = -this.computedData.borderSizePx.left + 'px';
        style.width = this.computedData.borderSizePx.left + 'px';
      }
      if (dir === 'right') {
        style.width = this.computedData.borderSizePx.right + 'px';
        style.right = -this.computedData.borderSizePx.right + 'px';
        style.left = undefined;
        //style.marginRight = -this.computedData.borderSizePx.right + 'px';
        //style.top = '0px';
        /* if (directions.length === 1) {
           style.top = this.computedData.borderSizePx.top + 'px';
         }*/
      }
      if (dir === 'top') {
        style.top = -this.computedData.borderSizePx.top + 'px';
        if (directions.length != 1)
          style.width = (this.xComputedRepeat * CHARACTER_SPACING) + 'px'
      }
      if (dir === 'bottom') {
        style.bottom = -this.computedData.borderSizePx.bottom + 'px';
        if (directions.length != 1)
          style.width = (this.xComputedRepeat * CHARACTER_SPACING) + 'px'
        style.top = undefined;
      }
    })
    return style;
  }

  ngOnDestroy(): void {
    this.toClear.forEach((timeout)=>{
      clearTimeout(timeout)
    })
  }
}

