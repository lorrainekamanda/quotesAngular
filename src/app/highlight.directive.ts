import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {



  constructor(private elem: ElementRef) { }
  @HostListener('clicks')
    if(numberOfLikes){
      this.highlight('yellow')
    }

    
  
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
