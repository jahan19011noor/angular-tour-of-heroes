import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  highlightColor: string;

  @Input()
  defaultColor: string;

  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor = 'yellow';
    // el.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight(this.highlightColor || 'red');
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontWeight = 'bold';
  }

}
