import {
  Component, ContentChild, Directive, ElementRef, HostBinding, Input,
  OnInit, ViewChild
} from '@angular/core';
import {CHARACTER_HEIGHT, CHARACTER_SPACING, LINE_HEIGHT} from "../AsciiConst";

@Directive({
  selector: '[app-ascii-on-grid-div] '
})
export class AsciiInsideGridDivComponent {
  @ContentChild(HTMLElement)
  child: HTMLElement
  @Input()
  public content: string

  @HostBinding("style")
  get hostStyle(): CSSStyleDeclaration {
    let contentSplited = (this.content ? this.content : this.child ? this.child.textContent : 'x').split('\n');
    return {
      gridColumn: 'span ' + contentSplited[0].length,
      gridRow: 'span ' + contentSplited.length
    } as CSSStyleDeclaration;
  }

}
