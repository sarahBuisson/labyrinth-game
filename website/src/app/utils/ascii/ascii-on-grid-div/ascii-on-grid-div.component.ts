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
  public xRepeat: string;

  @HostBinding('style.grid-row')
  public yRepeat: string;



  @ViewChild('contentDiv') contentDiv: ElementRef

  constructor(private readonly _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  tick_then(fn: () => any) { setTimeout(fn, 0); }

  ngAfterViewInit() {
    if(this.contentDiv) {
       this.tick_then( ()=>{
        this.yRepeat = 'span '+Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().height / 15.1)
        this.xRepeat = 'span '+Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().width / 7.82)
        this._changeDetectorRef.detectChanges();
      })


    }
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewInit();
  }
}
