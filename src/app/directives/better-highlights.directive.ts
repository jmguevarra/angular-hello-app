import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlights]'
})
export class BetterHighlightsDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cornflowerblue');
  }

  /** Hovering Element */
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cornflowerblue');
    //or
    this.backgroundColor = 'cornflowerblue';
  }

  @HostListener('mouseleave') mouseleave(evenData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //or
    this.backgroundColor = 'transparent';
  }
   /** End Hovering Element */
}

