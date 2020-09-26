import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef, HostBinding, Input,
  OnInit, Renderer2, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-ascii-on-grid-div',
  templateUrl: './ascii-on-grid-div.component.html',
  styleUrls: ['./ascii-on-grid-div.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsciiOnGridDivComponent implements OnInit, AfterViewInit, AfterViewChecked  {
  @HostBinding('style.grid-column')
  public gridColumn: string;

  @HostBinding('style.grid-row')
  public gridRow: string;

  public xRepeat: number;

  public yRepeat: number;



  @ViewChild('contentDiv') contentDiv: ElementRef

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef, private host: ElementRef,
              private readonly renderer:Renderer2) { }

  ngOnInit(): void {
  }
  tick_then(fn: () => any) { setTimeout(fn, 0); }


  ngAfterViewInit() {
    if(this.contentDiv) {
      const old={ yRepeat: this.yRepeat,xRepeat: this.xRepeat,}

      this.yRepeat = Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().height / 15.1)
      this.xRepeat = Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().width / 7.82)
      if (this.xRepeat != old.xRepeat || this.yRepeat != old.yRepeat) {
        this.renderer.setStyle(this.host.nativeElement, 'grid-column', 'span ' + this.xRepeat);
        this.renderer.setStyle(this.host.nativeElement, 'grid-row', 'span ' + this.yRepeat);
        this.tick_then(() => {
          this.gridColumn = 'span ' + this.xRepeat;
          this.gridRow = 'span ' + this.yRepeat;
          this._changeDetectorRef.detectChanges();
        })
      }
    }
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewInit();
  }
}
