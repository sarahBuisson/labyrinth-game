import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {CHARACTER_SPACING} from "../AsciiConst";

@Component({
  selector: 'app-ascii-character',
  templateUrl: './ascii-character.component.html',
  styleUrls: ['./ascii-character.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsciiCharacterComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input()
  content: any;

  @Input()
  tooltip: string;

  xRepeat: number = 1

  @ViewChild('contentDiv') contentDiv: ElementRef

  constructor(  private readonly _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if((<HTMLElement>this.contentDiv.nativeElement))
    this.xRepeat =  Math.ceil((<HTMLElement>this.contentDiv.nativeElement).getBoundingClientRect().width / CHARACTER_SPACING)
    this._changeDetectorRef.detectChanges();
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewInit();
  }

}
